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
export default function CommuteForm ({ requestCommuteFormData, data, error }) {
  return (
    <Fragment>
      <Formik
        initialValues={
          {
            workStationName: '',
            workStationIcsId: '',
            mileRadius: 1,
            lat: 51.5081,
            lng: -0.1249
          }
        }
        validationSchema={Yup.object().shape({
          lat: Yup.string()
            .required('Required'),
          lng: Yup.string()
            .required('Required')
        })}
        onSubmit={values => {
          requestCommuteFormData({
            workStationIcsId: values.workStationIcsId,
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
            handleSubmit
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <StationPicker
                id="workStation"
                value={values.workStationName}
                onChange={handleChange}
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
              <button type="submit" disabled={isSubmitting}>
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
              data.map(journey => (
                <Fragment>
                  <p>station: {journey.legs[0].departurePoint.commonName}</p>
                  <p>duration: {journey.duration}</p>
                </Fragment>
              ))
            }
          </Fragment>
      }
    </Fragment>
  );
}

CommuteForm.propTypes = {
  requestCommuteFormData: PropTypes.func.isRequired,
  data: PropTypes.shape(),
  error: PropTypes.string
};

CommuteForm.defaultProps = {
  data: {},
  error: ''
};
