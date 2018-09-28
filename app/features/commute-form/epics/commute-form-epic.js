import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {
  COMMUTE_FORM_REQUEST,
  receiveCommuteFormData,
  failedCommuteFormRequest
} from 'features/commute-form/actions/commute-form-actions';
/**
 * fetchCommuteFormData
 * @param {Object} action$ - action observable
 * @param {Object} store - redux store
 * @param {Object} dependencies - injected dependencies
 * @return {Object} - action observable
 */
export default function fetchCommuteFormData (action$, store, { apiHelper }) {
  return action$.ofType(COMMUTE_FORM_REQUEST)
    .switchMap(action =>
      Observable.fromPromise(apiHelper.get(
        `https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanMetroStation,NaptanRailStation&radius=${action.mileRadius}&lat=${action.lat}&lon=${action.lng}`
      )),
    (action, response) => ([response, action]))
    .switchMap(
      ([response, action]) => {
        if (!response.data.stopPoints.length) {
          throw new Error('There are no stations in this area.');
        }

        return Observable.forkJoin(
          response.data.stopPoints
            .filter(stopPoint => stopPoint.icsCode !== action.workStationIcsId)
            .map(stopPoint =>
              Observable.fromPromise(
                apiHelper.get(
                  `https://api.tfl.gov.uk/Journey/JourneyResults/${stopPoint.icsCode}/to/${action.workStationIcsId}&time=0900`
                )
              )
            )
        )
      }
    )
    .map(responses => {
      const responseData = [];

      responses.map(response => {
        responseData.push(response.data.journeys[0]);
      });

      return receiveCommuteFormData(responseData);
    })
    .catch(error => {
      let errorMessage = error.message;

      if (error.message === 'Network Error') {
        errorMessage = 'There must be too many stations in this area!';
      }

      if (error.response && error.response.data.toLocationDisambiguation.matchStatus === 'empty') {
        errorMessage = 'Please enter a valid station for your work station.';
      }

      return Observable.of(failedCommuteFormRequest(errorMessage));
    });
}
