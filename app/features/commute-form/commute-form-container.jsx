import React from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestCommuteFormData } from 'features/commute-form/actions/commute-form-actions';

import CommuteForm from 'features/commute-form/commute-form';

const CommuteFormContainer = props => (
  <CommuteForm
    isFetching={props.commuteForm.isFetching}
    data={props.commuteForm.data}
    error={props.commuteForm.error}
    requestCommuteFormData={props.requestCommuteFormData}
  />
);

CommuteFormContainer.propTypes = {
  commuteForm: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape()),
    error: PropTypes.string,
    isFetching: PropTypes.bool
  }).isRequired,
  requestCommuteFormData: PropTypes.func.isRequired
};

const config = {
  props: ['commuteForm'],
  actions: [{
    requestCommuteFormData
  }]
};

export default connectToStoreHelper(config, CommuteFormContainer);
