import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom'

import Actions from '../js/actions/index.js';
import BucketList from './BucketList.jsx';
import Destination from './Destination.jsx';
import Login from './Login.jsx';
import Memories from './NavBar.jsx';
import NavBar from './NavBar.jsx';
import User from './User.jsx';

//changes views between login page, destination page and profile page
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('this works :: ', this.props);
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/destination' component={Destination} />
          {/* <Route path='/user' component={User} />
          <Route path='/user/bucket_list' component={BucketList} />
          <Route path='/user/memories' component={Memories} /> */}
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     loginView: state.LoginView,
//     destinationView: state.DestinationView,
//     userView: state.UserView
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

// const App = connect(mapStateToProps)(ConnectedApp);
export default App;