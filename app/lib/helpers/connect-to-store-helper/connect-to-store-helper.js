import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapProps = arr => state => arr.reduce((acc, curr) => {
  acc[curr] = state[curr];

  return acc;
}, {});

const mapDispatch = actions => dispatch => bindActionCreators(Object.assign({}, ...actions), dispatch);

const connectToStore = (config, component) =>
  connect(
    mapProps(config.props),
    mapDispatch(config.actions)
  )(component);

export default connectToStore;
