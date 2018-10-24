import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

import {
  receiveCommuteFormData,
  failedCommuteFormRequest
} from 'features/commute-form/actions/commute-form-actions';

/* eslint-disable import/prefer-default-export */
// disabled for testing purposes
/**
 * fetchJourneyData
 * @param {Array} journeys - stoppoints
 * @param {Object} action - redux action
 * @param {Function} apiHelper - apiHelper dependency
 * @param {Object} constants - epic constants
 * @return {Object} - observable
 */
export function fetchJourneyData (journeys, action, apiHelper, constants) {
  return Observable.forkJoin(
    journeys
      .filter(stopPoint => stopPoint.icsCode && stopPoint.icsCode !== action.workStation)
      .filter(stopPoint => !stopPoint.commonName.includes('International'))
      .map(stopPoint =>
        Observable.fromPromise(
          apiHelper.get(
            `https://api.tfl.gov.uk/Journey/JourneyResults/${stopPoint.icsCode}/to/${action.workStation}&time=0900&app_id=${constants.tflAppId}&app_key=${constants.tflAppKey}`
          )
        )
      )
  )
    .map(responses => {
      const responseData = [];

      responses
        .forEach(journeyResponse => {
          responseData.push(journeyResponse.data.journeys[0]);
        });

      return receiveCommuteFormData(responseData);
    })
    .pipe(
      catchError(error => {
        const errorMessage =
          error.response && error.response.data.toLocationDisambiguation.matchStatus === 'empty'
            ? 'Please enter a valid station for your work station'
            : constants.genericFail;

        return Observable.of(failedCommuteFormRequest(errorMessage));
      })
    );
}
