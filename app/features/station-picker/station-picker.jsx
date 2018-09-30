import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';

/**
 * Station Picker
 * @returns {element} JSX
 */
export default class StationPicker extends Component {
  /**
   * constructor
   * @param {Object} props - react props
   */
  constructor (props) {
    super(props);

    this.options = [];
  }

  /**
   * updateOptions
   * @returns {Void} void
   */
  updateOptions () {
    if (this.props.data) {
      this.options =
        this.props.data.matches.map(match => {
          return {
            value: match.icsId,
            label: match.name
          };
        });
    }
  }

  handleChange (input) {
    this.props.setFieldValue(this.props.id, input.value);
  }

  handleRequest (input) {
    this.props.requestStationPickerData(input);
  }

  handleMenuClose () {
    this.props.requestStationPickerData();
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    this.updateOptions();

    return (
      <Fragment>
        <Select
          id={this.props.id}
          options={this.options}
          onChange={input => this.handleChange(input)}
          onInputChange={input => this.handleRequest(input)}
          onMenuClose={() => this.handleMenuClose()}
          noOptionsMessage={() => 'Type to search for stations'}
        />
      </Fragment>
    );
  }
}
