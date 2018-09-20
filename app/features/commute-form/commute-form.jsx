import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { StationPicker } from 'features';
import MilesPicker from 'components/miles-picker/miles-picker';

/**
 * Commute Form
 * @returns {element} JSX
 */
export default function CommuteForm ({ requestCommuteFormData, data }) {
  return (
    <Fragment>
      <Formik
        initialValues={{ homeStation: '' }}
        validationSchema={Yup.object().shape({
          homeStation: Yup.string()
            .required('Required')
        })}
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
              <StationPicker id="homeStation" value={values.homeStation} onChange={handleChange} />
              <MilesPicker
                options={[0, 1, 2, 3, 4, 5]}
                label="Please select radius in miles"
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </Fragment>
  );
}

// https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanMetroStation,NaptanRailStation&radius=1600&lat=51.472184&lon=-0.122644

CommuteForm.propTypes = {
  requestCommuteFormData: PropTypes.func.isRequired,
  data: PropTypes.shape()
};

CommuteForm.defaultProps = {
  data: {}
};
