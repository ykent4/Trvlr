import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Actions from '../js/actions/index.js';

//changes views between login page, destination page and profile page
class ConnectedUser extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        test User
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

};

const User = connect(mapStateToProps, mapDispatchToProps)(ConnectedUser);
export default User;