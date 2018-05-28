import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Destination from '../components/Destination.jsx';
import { getDestinations } from '../js/actions/index.js';

const mapStateToProps = state => {
  return { destinations: state.Destination.destinations };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDestinations }, dispatch);
};

const DestinationContainer = connect(mapStateToProps, mapDispatchToProps)(Destination);
export default DestinationContainer;

