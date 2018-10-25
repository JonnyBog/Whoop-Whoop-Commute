import {
  COMMUTE_FORM_REQUEST,
  COMMUTE_FORM_SUCCESS,
  COMMUTE_FORM_FAILURE
} from 'features/commute-form/actions/commute-form-actions';
import * as journeyEpic from 'features/commute-form/epics/journey-epic';

describe('Features', () => {
  describe('Commute Form Journey epic', () => {
    let journeys;
    let action;
    let constants;

    beforeEach(() => {
      journeys = [
        {
          icsCode: 'test isc',
          commonName: 'test name'
        }
      ];

      action = {
        type: COMMUTE_FORM_REQUEST,
        workStation: 'test'
      };

      constants = {
        tflAppId: 'test id',
        tflAppKey: 'test key',
        genericFail: 'Oops, something has gone wrong. There might be an issue with a station in this area.'
      };
    });

    afterEach(() => {
      journeys = null;
      action = null;
      constants = null;
    });

    it('dispatches success action when successful', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise(resolve => resolve({
          data: {
            journeys: [
              {
                test: 'test journey'
              }
            ]
          }
        })))
      };

      const expectedOutputActions = [
        {
          type: COMMUTE_FORM_SUCCESS,
          response: [
            {
              test: 'test journey'
            }
          ]
        }
      ];

      journeyEpic.fetchJourneyData(journeys, action, apiHelper, constants)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        });
    });
  });
});
