import React, { Component, Fragment } from 'react';
import ReactLocationPicker from 'react-location-picker';

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
          mapElement={<div style={{ height: '400px' }} />}
          defaultPosition={this.state.defaultPosition}
          onChange={this.handleChange}
          radius={this.props.radius * 1609.34}
          zoom={11}
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
