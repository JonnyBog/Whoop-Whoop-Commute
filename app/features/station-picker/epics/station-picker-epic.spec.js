import { ActionsObservable } from 'redux-observable';

import {
  STATION_PICKER_REQUEST,
  STATION_PICKER_SUCCESS,
  STATION_PICKER_FAILURE
} from 'features/station-picker/actions/station-picker-actions';
import fetchStationPickerData from 'features/station-picker/epics/station-picker-epic';

describe('Features', () => {
  describe('Station picker epic', () => {
    const action$ = ActionsObservable.of(
      {
        type: STATION_PICKER_REQUEST,
        targetValue: 'test'
      }
    );

    it('dispatches success action when successful and removes matches without icsId', () => {
      const dependencies = {
        apiHelper: {
          get: jest.fn(() => new Promise(resolve => resolve({
            data: {
              matches: [
                {
                  icsId: 'test ics',
                  name: 'test name'
                },
                {
                  name: 'test name 2'
                }
              ]
            }
          })))
        }
      };
      const expectedOutputActions = [
        {
          type: STATION_PICKER_SUCCESS,
          data: {
            matches: [
              {
                value: 'test ics',
                label: 'test name'
              }
            ]
          }
        }
      ];

      fetchStationPickerData(action$, {}, dependencies)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
        });
    });

    it('dispatches specific failed action when there is no target action', () => {
      const noTargetAction$ = ActionsObservable.of(
        {
          type: STATION_PICKER_REQUEST
        }
      );

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
          type: STATION_PICKER_FAILURE,
          response: 'Nothing inputted'
        }
      ];

      fetchStationPickerData(noTargetAction$, {}, dependencies)
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
          type: STATION_PICKER_FAILURE,
          error: 'error'
        }
      ];

      fetchStationPickerData(action$, {}, dependencies)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
        });
    });
  });
});
