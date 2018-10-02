import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {
  STATION_PICKER_REQUEST,
  receiveStationPickerData,
  failedStationPickerRequest
} from 'features/station-picker/actions/station-picker-actions';
/**
 * fetchStationPickerData
 * @param {Object} action$ - action observable
 * @param {Object} store - redux store
 * @param {Object} dependencies - injected dependencies
 * @return {Object} - action observable
 */
export default function fetchStationPickerData (action$, store, { apiHelper }) {
  return action$.ofType(STATION_PICKER_REQUEST)
    .switchMap(action => {
      if (!action.targetValue) {
        return Observable.of(failedStationPickerRequest('Nothing inputted'));
      }

      return Observable.fromPromise(apiHelper.get(
        `https://api.tfl.gov.uk/StopPoint/Search/${action.targetValue}?modes=tube%2C%20dlr%2C%20overground%2C%20tflrail%2C%20tram%2C%20tram%2C%20national-rail`
      ))
        .map(response => {
          const matches =
            response.data.matches
              .filter(match => match.icsId)
              .map(match => {
                return {
                  value: match.icsId,
                  label: match.name
                };
            });

          return receiveStationPickerData({
            data: {
              matches
            }
          });
        })
        .catch(error => Observable.of(failedStationPickerRequest(error)))
    });
}
