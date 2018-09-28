import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {
  COMMUTE_FORM_REQUEST,
  receiveCommuteFormData,
  networkErrorCommuteFormRequest,
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
      ([response, action]) =>
        Observable.forkJoin(
          response.data.stopPoints.map(stopPoint =>
            Observable.fromPromise(
              apiHelper.get(
                `https://api.tfl.gov.uk/Journey/JourneyResults/${stopPoint.icsCode}/to/${action.workStationIcsId}&time=0900`
              )
            )
          )
        )
    )
    .map(responses => {
      const responseData = [];

      responses.map(response => {
        responseData.push(response.data.journeys[0]);
      });

      return receiveCommuteFormData(responseData);
    })
    .catch(error => {
      let errorMessage = 'Something unusual has happened, please try again.';

      if (error.message === 'Network Error') {
        errorMessage = 'There must be too many stations in this area!';
      } else if (error.response.data.toLocationDisambiguation.matchStatus === 'empty') {
        errorMessage = 'Please enter a valid station for your work station';
      }

      return Observable.of(failedCommuteFormRequest(errorMessage));
    });
}
