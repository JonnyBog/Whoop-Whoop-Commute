import { ActionsObservable } from 'redux-observable';

import {
  COMMUTE_FORM_REQUEST,
  COMMUTE_FORM_SUCCESS,
  COMMUTE_FORM_FAILURE
} from 'features/commute-form/actions/commute-form-actions';
import fetchCommuteFormData from 'features/commute-form/epics/commute-form-epic';

describe('Features', () => {
  describe('Commute Form epic', () => {
    const action$ = ActionsObservable.of(
      {
        type: COMMUTE_FORM_REQUEST
      }
    );

    it('dispatches success action when successful', done => {
      const dependencies = {
        apiHelper: {
          get: jest.fn(() => new Promise(resolve => resolve({
            response: {
              data: {
                stopPoints: [
                  {
                    icsCode: 'test'
                  }
                ]
              }
            }
          })))
        }
      };
      const expectedOutputActions = [
        {
          type: COMMUTE_FORM_SUCCESS,
          data: {
            test: 'test'
          }
        }
      ];

      fetchCommuteFormData(action$, {}, dependencies)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        });
    });

    // it('dispatches failed with no stations message when there are no stations', done => {
    //   const dependencies = {
    //     apiHelper: {
    //       get: jest.fn(() => new Promise(resolve => resolve({
    //         response: {
    //           data: {
    //             stopPoints: null
    //           }
    //         }
    //       })))
    //     }
    //   };
    //   const expectedOutputActions = [
    //     {
    //       type: COMMUTE_FORM_SUCCESS,
    //       response: 'There are no stations in this area.'
    //     }
    //   ];

    //   fetchCommuteFormData(action$, {}, dependencies)
    //     .toArray()
    //     .subscribe(actualOutputActions => {
    //       expect(actualOutputActions).toEqual(expectedOutputActions);
    //       done();
    //     });
    // });

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
  });
});
