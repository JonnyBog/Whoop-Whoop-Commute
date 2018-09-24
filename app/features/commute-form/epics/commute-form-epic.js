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
      ([response, action]) =>
        Observable.fromPromise(apiHelper.get(
          `https://api.tfl.gov.uk/Journey/JourneyResults/${action.workStation.icsCode}/to/${response.data.stopPoints[0].icsCode}`
        ))
    )
    .map(response => receiveCommuteFormData(response))
    .catch(error => Observable.of(failedCommuteFormRequest(error)));
}
