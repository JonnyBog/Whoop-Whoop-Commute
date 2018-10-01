import React, { Component } from 'react';
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
   */
  constructor () {
    super();

    this.options = [];
  }

  componentDidUpdate () {
    this.updateOptions();
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

  handleInputChange (input) {
    this.props.requestStationPickerData(input);
  }

  handleMenuClose () {
    this.options = [];
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <div>
        <Select
          id={this.props.id}
          instanceId={this.props.id}
          options={this.options}
          onChange={input => this.handleChange(input)}
          onInputChange={input => this.handleInputChange(input)}
          onMenuClose={() => this.handleMenuClose()}
          noOptionsMessage={() => 'Type to search for stations'}
        />
        {
          this.props.error && <p>{this.props.error}</p>
        }
      </div>
    );
  }
}
