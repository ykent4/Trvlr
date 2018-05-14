import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Actions from '../js/actions/index.js';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import style from './styles/login.css';

//changes views between login page, destination page and profile page
class ConnectedLogin extends React.Component {
  constructor(props) {
    super(props);

  }

  //on submit of the button, needs to make an axios get request to the user database
    //if success, there is user, send back user and data
    //if failure, say new user created and create user
    //go to destination in both cases

  //initial implementation will directly go to destination and ignore user for now

  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText" >

          <ControlLabel>Login</ControlLabel>
          <FormControl 
           className={style.input_box}
            type="text"
            // value=''
            placeholder="Enter text"
            // onChange=''
          />
          <HelpBlock>Please enter username to login</HelpBlock>
        </FormGroup>

         <Button type="button">Submit</Button>
      </form>

    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

};

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);
export default Login;