import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';

import FormError from 'components/form-error/form-error';

const StationPickerContainer = styled.div`
`;

/**
 * Station Picker
 * @returns {element} JSX
 */
export default class StationPicker extends Component {
  /**
   * constructor
   */
  constructor () {
    super();
  }

  handleChange (input) {
    this.props.setFieldValue(this.props.id, input.value);
  }

  handleInputChange (input) {
    this.props.requestStationPickerData(input);
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <StationPickerContainer>
        <Select
          id={this.props.id}
          instanceId={this.props.id}
          options={this.props.data.matches}
          onChange={input => this.handleChange(input)}
          onInputChange={input => this.handleInputChange(input)}
          noOptionsMessage={() => 'Type to search for stations'}
        />
        {
          this.props.error && <FormError>{this.props.error}</FormError>
        }
      </StationPickerContainer>
    );
  }
}
