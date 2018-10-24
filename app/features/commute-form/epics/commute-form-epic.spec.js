import { ActionsObservable } from 'redux-observable';

import {
  COMMUTE_FORM_REQUEST,
  COMMUTE_FORM_FAILURE
} from 'features/commute-form/actions/commute-form-actions';
import fetchCommuteFormData from 'features/commute-form/epics/commute-form-epic';
import * as journeyEpic from 'features/commute-form/epics/journey-epic';

describe('Features', () => {
  describe('Commute Form epic', () => {
    describe('Commute Form data', () => {
      const action$ = ActionsObservable.of(
        {
          type: COMMUTE_FORM_REQUEST,
          workStation: 'test'
        }
      );

      beforeEach(() => {
        journeyEpic.fetchJourneyData = jest.fn();
      });

      it('dispatches success action when successful', done => {
        const dependencies = {
          apiHelper: {
            get: jest.fn(() => new Promise(resolve => resolve({
              data: {
                stopPoints: [
                  {
                    icsCode: 'test isc',
                    commonName: 'test name'
                  }
                ]
              }
            })))
          }
        };

        fetchCommuteFormData(action$, {}, dependencies)
          .toArray()
          .subscribe(() => {
            expect(journeyEpic.fetchJourneyData).toHaveBeenCalled();
            done();
          });
      });

      it('dispatches failed with no stations message when there are no stations', done => {
        const dependencies = {
          apiHelper: {
            get: jest.fn(() => new Promise(resolve => resolve({
              data: {
                stopPoints: []
              }
            })))
          }
        };
        const expectedOutputActions = [
          {
            type: COMMUTE_FORM_FAILURE,
            response: 'There are no stations in this area.'
          }
        ];

        fetchCommuteFormData(action$, {}, dependencies)
          .toArray()
          .subscribe(actualOutputActions => {
            expect(actualOutputActions).toEqual(expectedOutputActions);
            done();
          });
      });

      it('dispatches generic fail if promise is rejected', done => {
        const dependencies = {
          apiHelper: {
            get: jest.fn(() =>
              new Promise((resolve, reject) =>
                reject(new Error())
              )
            )
          }
        };
        const expectedOutputActions = [
          {
            type: COMMUTE_FORM_FAILURE,
            response: 'Oops, something has gone wrong. There might be an issue with a station in this area.'
          }
        ];

        fetchCommuteFormData(action$, {}, dependencies)
          .toArray()
          .subscribe(actualOutputActions => {
            expect(actualOutputActions).toEqual(expectedOutputActions);
            done();
          });
      });

      it('dispatches too many stations fail if promise is rejected with specific error', done => {
        const dependencies = {
          apiHelper: {
            get: jest.fn(() =>
              new Promise((resolve, reject) =>
                reject(new Error('Network Error'))
              )
            )
          }
        };
        const expectedOutputActions = [
          {
            type: COMMUTE_FORM_FAILURE,
            response: 'There must be too many stations in this area!'
          }
        ];

        fetchCommuteFormData(action$, {}, dependencies)
          .toArray()
          .subscribe(actualOutputActions => {
            expect(actualOutputActions).toEqual(expectedOutputActions);
            done();
          });
      });
    });
  });
});
