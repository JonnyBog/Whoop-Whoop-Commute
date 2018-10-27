import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import FormError from 'components/form-error/form-error';

/**
 * Station Picker
 * @returns {element} JSX
 */
export default class StationPicker extends Component {
  /**
   * propTypes
   * @type {Object}
   */
  static propTypes = {
    data: PropTypes.shape({
      matches: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string
        })
      )
    }),
    id: PropTypes.string,
    setFieldValue: PropTypes.func.isRequired,
    requestStationPickerData: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  /**
   * defaultProps
   * @type {Object}
   */
  static defaultProps = {
    data: null,
    error: '',
    id: 'station-picker'
  }

  /**
   * handleChange - handles select change
   * @param {Object} input - element
   * @return {Void} - void
   */
  handleChange (input) {
    this.props.setFieldValue(this.props.id, input.value);
  }

  /**
   * handleInputChange - handles input change
   * @param {Object} input - element
   * @return {Void} - void
   */
  handleInputChange (input) {
    this.props.requestStationPickerData(input);
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <Fragment>
        <Select
          id={this.props.id}
          instanceId={this.props.id}
          options={this.props.data.matches}
          onChange={input => this.handleChange(input)}
          onInputChange={input => this.handleInputChange(input)}
          noOptionsMessage={() => 'Type to search for stations'}
          placeholder="Work station"
        />
        {
          this.props.error && <FormError>{this.props.error}</FormError>
        }
      </Fragment>
    );
  }
}
