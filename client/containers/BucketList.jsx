import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Actions from '../js/actions/index.js';

//changes views between login page, destination page and profile page
class ConnectedLogin extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        test login
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

};

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);
export default Login;