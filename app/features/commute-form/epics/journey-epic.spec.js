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
        workStation: 'test workstation'
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

    it('dispatches success action when successful and only returns first journey', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise(resolve => resolve({
          data: {
            journeys: [
              {
                icsCode: 'test ics',
                commonName: 'test name'
              },
              {
                icsCode: 'test ics 2',
                commonName: 'test name 2'
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
              icsCode: 'test ics',
              commonName: 'test name'
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

    it('dispatches success action when successful and filters out international stations', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise(resolve => resolve({
          data: {
            journeys: [
              {
                icsCode: 'test ics',
                commonName: 'test name'
              },
              {
                icsCode: 'test ics',
                commonName: 'test name international'
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
              icsCode: 'test ics',
              commonName: 'test name'
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

    it('dispatches success action when successful and filters out station where common name is the same as work station name', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise(resolve => resolve({
          data: {
            journeys: [
              {
                icsCode: 'test ics',
                commonName: 'test name'
              },
              {
                icsCode: 'test ics',
                commonName: 'test workstation'
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
              icsCode: 'test ics',
              commonName: 'test name'
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

    it('dispatches failure and has message for empty match status', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise((resolve, reject) =>
          /* eslint-disable prefer-promise-reject-errors */
          reject(({
            response: {
              data: {
                toLocationDisambiguation: {
                  matchStatus: 'empty'
                }
              }
            }
          }))
        ))
      };

      const expectedOutputActions = [
        {
          type: COMMUTE_FORM_FAILURE,
          response: 'Please enter a valid station for your work station'
        }
      ];

      journeyEpic.fetchJourneyData(journeys, action, apiHelper, constants)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        });
    });

    it('dispatches failure and has generic message', done => {
      const apiHelper = {
        get: jest.fn(() => new Promise((resolve, reject) =>
          reject(new Error())
        ))
      };

      const expectedOutputActions = [
        {
          type: COMMUTE_FORM_FAILURE,
          response: 'Oops, something has gone wrong. There might be an issue with a station in this area.'
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
