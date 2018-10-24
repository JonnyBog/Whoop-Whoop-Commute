import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connectToStoreHelper } from 'lib';
import { requestCommuteFormData } from 'features/commute-form/actions/commute-form-actions';

import CommuteForm from 'features/commute-form/commute-form';

// eslint-disable-next-line react/prefer-stateless-function
class CommuteFormContainer extends Component {
  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <CommuteForm
        isFetching={this.props.commuteForm.isFetching}
        data={this.props.commuteForm.data}
        error={this.props.commuteForm.error}
        requestCommuteFormData={this.props.requestCommuteFormData}
      />
    );
  }
}
// keeps container tests consistent to be written as class

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
