import React from 'react';
import { connect } from "react-redux";

import NavigationBar from '../components/NavigationBar.jsx';

const mapStateToProps = state => {
  return {
    user: state.Login.user
  };
}

const NavigationBarContainer = connect(mapStateToProps)(NavigationBar);

export default NavigationBarContainer;