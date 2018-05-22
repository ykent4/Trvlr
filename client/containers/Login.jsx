import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getUser, signUpUser } from '../js/actions/index.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import style from './styles/login.scss';

//changes views between login page, destination page and profile page
class ConnectedLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loggedIn: false,
      unauthenticated: false,
    };

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.notifySignUp = this.notifySignUp.bind(this);
  }

  //on submit of the button, needs to make an axios get request to the user database
  //if success, there is user, send back user and data
  //if failure, ask if new user? if yes, create user and continue
  //go to destination in both cases

  handleUsernameInput(e) {

    this.setState({ username: e.target.value });

  }

  handleLoginClick() {

    this.props.getUser(this.state.username)
      .then((result) => {
        if (!!this.props.user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ unauthenticated: true });
          console.log('authentification ', this.state.unauthenticated);
        }
      })
      .catch((error) => console.log('get user error ', error));

  }

  handleSignUpClick() {
    if (this.state.username.length > 0) {
      this.props.signUpUser(this.state.username)
        .then((result) => {
          this.notifySignUp();
        })
        .catch((error) => console.log('sign up user error ', error));
    }
  }

  notifySignUp () {
    toast('🎉 you have successfully signed up, please proceed to login', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };


  render() {

    if (this.state.loggedIn) {
      return <Redirect to='/destination' />
    }

    return (

      <div className={style.login_container}>

        <h2> TRVLR </h2>

        <form className={style.form}>
          <FormGroup controlId="formBasicText" >

            <FormControl
              className={style.input_box}
              type="text"
              value={this.state.username}
              placeholder="Please enter your username"
              onChange={this.handleUsernameInput}
            />
          </FormGroup>
          <Button type="button" onClick={() => {
            this.handleLoginClick();
            this.props.rerenderNavBar();
          }}>Login</Button>
          <Button type="button" onClick={() => {
            this.handleSignUpClick();
          }}>Sign Up</Button>

        </form>

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        {this.state.unauthenticated && <Alert bsStyle="warning" className={style.alert}>
          <strong>User not found. Please sign up or try again.</strong>
        </Alert>}

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Login.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser, signUpUser }, dispatch);
};

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);
export default Login;