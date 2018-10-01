import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { StationPicker } from 'features';
import MilesPicker from 'components/miles-picker/miles-picker';
import LocationPicker from 'components/location-picker/location-picker';

/**
 * Commute Form
 * @returns {element} JSX
 */
export default function CommuteForm ({ requestCommuteFormData, isFetching, data, error }) {
  return (
    <Fragment>
      <Formik
        initialValues={
          {
            workStation: '',
            mileRadius: 1,
            lat: 51.5081,
            lng: -0.1249
          }
        }
        validationSchema={Yup.object().shape({
          workStation: Yup.string()
            .required('Please enter a work station')
        })}
        onSubmit={values => {
          requestCommuteFormData({
            workStation: values.workStation,
            mileRadius: Math.round(values.mileRadius * 1609.34),
            lat: values.lat,
            lng: values.lng
          });
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            submitCount
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <StationPicker
                id="workStation"
                value={values.workStation}
                setFieldValue={setFieldValue}
                error={submitCount > 0 && errors.workStation}
              />
              <MilesPicker
                id="mileRadius"
                value={values.mileRadius}
                onChange={handleChange}
                maxMiles={2}
                label="Please select radius in miles"
              />
              <LocationPicker
                value={{
                  lat: values.lat,
                  lng: values.lng
                }}
                onChange={handleChange}
                radius={values.mileRadius}
              />
              <button type="submit" disabled={isFetching}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      {
        error && <div>{error}</div>
      }
      {
        data &&
          <Fragment>
            <h2>Results:</h2>
            {
              data.map(journey => {
                const { commonName } = journey.legs[0].departurePoint;

                return (
                  <div key={journey.legs[0].instruction.summary}>
                    <p>station: {commonName}</p>
                    <p>duration: {journey.duration}</p>
                    <div>
                      instructions:
                      {
                        journey.legs.map(leg => (
                          <p key={leg.instruction.summary}>{leg.instruction.summary}</p>
                        ))
                      }
                    </div>
                  </div>
                );
              })
            }
          </Fragment>
      }
    </Fragment>
  );
}

CommuteForm.propTypes = {
  requestCommuteFormData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()),
  error: PropTypes.string
};

CommuteForm.defaultProps = {
  data: {},
  error: ''
};
