import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

    this.state = {
      icsid: ''
    };

    this.handleBlur = this.handleBlur.bind(this);
  }

  /**
   * handleBlur
   * @returns {Void} - void
   */
  handleBlur () {
    if (this.stationPickerInput.list && this.stationPickerInput.list.options.length === 1) {
      this.setState({
        icsid: this.stationPickerInput.list.options[0].dataset.icsid
      },
      () => {
        this.stationPickerHiddenInput.click();
      }
      );
    } else {
      this.setState({
        icsid: ''
      },
      () => {
        this.stationPickerHiddenInput.click();
      });
    }
  }

  /**
   * react render
   * @returns {JSX} - JSX
   */
  render () {
    return (
      <Fragment>
        <input
          id={`${this.props.id}Name`}
          list={`${this.props.id}-list`}
          value={this.props.value}
          onBlur={this.handleBlur}
          onChange={this.props.onChange}
          onKeyUp={e => this.props.requestStationPickerData(e.target.value)}
          ref={input => this.stationPickerInput = input}
        />
        <input
          id={`${this.props.id}IcsId`}
          value={this.state.icsid}
          onChange={this.props.onChange}
          onClick={this.props.onChange}
          ref={input => this.stationPickerHiddenInput = input}
          type="hidden"
        />
        {
          this.props.data && this.props.data.matches &&
            <datalist id={`${this.props.id}-list`}>
              {
                this.props.data.matches.map(match => (
                  <option value={match.name} key={match.name} data-icsid={match.icsId} />
                ))
              }
            </datalist>
        }
      </Fragment>
    );
  }
}
