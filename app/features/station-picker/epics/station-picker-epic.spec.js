import { ActionsObservable } from 'redux-observable';

import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from 'features/home/actions/home-actions';
import fetchHomeData from 'features/home/epics/home-epic';

describe('Features', () => {
  describe('Home epic', () => {
    const action$ = ActionsObservable.of(
      {
        type: HOME_PAGE_REQUEST
      }
    );

    it('dispatches success action when successful', () => {
      const dependencies = {
        apiHelper: {
          get: jest.fn(() => new Promise(resolve => resolve({ test: 'test' })))
        }
      };
      const expectedOutputActions = [
        {
          type: HOME_PAGE_SUCCESS,
          data: {
            test: 'test'
          }
        }
      ];

      fetchHomeData(action$, {}, dependencies)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
        });
    });

    it('dispatches failed action when unsuccessful', () => {
      const dependencies = {
        apiHelper: {
          get: jest.fn(() =>
            new Promise((resolve, reject) =>
              reject(new Error({
                response: 'error'
              }))
            )
          )
        }
      };
      const expectedOutputActions = [
        {
          type: HOME_PAGE_FAILURE,
          error: 'error'
        }
      ];

      fetchHomeData(action$, {}, dependencies)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
        });
    });
  });
});
