import React, { Component, Fragment } from 'react';
import ReactLocationPicker from 'react-location-picker';

import {
  colors
} from 'base-styles';

export default class LocationPicker extends Component {
  /**
   * constructor
   * @param {Object} props - react props
   */
  constructor (props) {
    super(props);

    this.state = {
      defaultPosition: props.value,
      position: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * handleChange
   * @returns {Void} - void
   */
  handleChange ({ position }) {
    this.setState({ position });
    this.latInput.click();
    this.lngInput.click();
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <Fragment>
        <ReactLocationPicker
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div className="location-picker" />}
          defaultPosition={this.state.defaultPosition}
          onChange={this.handleChange}
          radius={this.props.radius * 1609.34}
          zoom={11}
          circleOptions={{
            strokeColor: colors.orange,
            fillColor: colors.orange
          }}
        />
        <input
          id="lat"
          type="hidden"
          value={this.state.position.lat}
          onClick={this.props.onChange}
          ref={input => this.latInput = input}
        />
        <input
          id="lng"
          type="hidden"
          value={this.state.position.lng}
          onClick={this.props.onChange}
          ref={input => this.lngInput = input}
        />
      </Fragment>
    );
  }
}
