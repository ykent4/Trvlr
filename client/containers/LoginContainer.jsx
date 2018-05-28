import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getUser, signUpUser } from '../js/actions/index.js';
import Login from '../components/Login.jsx';

const mapStateToProps = state => {
  return {
    user: state.Login.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser, signUpUser }, dispatch);
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;