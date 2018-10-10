import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  GridContainer,
  GridItem,
  gridMarginBottomAll
} from 'base-styles';

import { StationPicker } from 'features';
import MilesPicker from 'components/miles-picker/miles-picker';
import LocationPicker from 'components/location-picker/location-picker';
import FormError from 'components/form-error/form-error';
import CommuteFormSubmit from './components/commute-form-submit/commute-form-submit';
import CommuteFormResults from './components/commute-form-results/commute-form-results';

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
            .required('Please enter your work station')
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
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
            submitCount
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <GridContainer
                px={[0, 0, 0]}
                mb={gridMarginBottomAll}
              >
                <GridItem
                  width={[1, 1/2, 1/3]}
                  px={[0, 0, 0]}
                  mb={gridMarginBottomAll}
                  mr={[0, 0, 50]}
                >
                  <StationPicker
                    id="workStation"
                    value={values.workStation}
                    setFieldValue={setFieldValue}
                    error={submitCount > 0 && errors.workStation}
                  />
                </GridItem>
                <GridItem
                  width={[1, 1/1, 1/3]}
                  px={[0, 0, 0]}
                  mb={gridMarginBottomAll}
                >
                  <MilesPicker
                    id="mileRadius"
                    value={values.mileRadius}
                    onChange={handleChange}
                    maxMiles={2}
                    label="Home Radius"
                  />
                </GridItem>
                <GridItem
                  width={[1, 1, 1]}
                  px={[0, 0, 0]}
                >
                  <LocationPicker
                    value={{
                      lat: values.lat,
                      lng: values.lng
                    }}
                    onChange={handleChange}
                    radius={values.mileRadius}
                  />
                </GridItem>
                <CommuteFormSubmit
                  isFetching={isFetching}
                  error={errors.workStation}
                >
                  {
                    !isFetching
                      ? 'Submit'
                      : 'Loading...'
                  }
                </CommuteFormSubmit>
              </GridContainer>
            </form>
          );
        }}
      </Formik>
      {
        error &&
        <FormError>
          {error}
        </FormError>
      }
      {
        data &&
          <CommuteFormResults data={data} />
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
