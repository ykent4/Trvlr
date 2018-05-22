import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom'

import Actions from '../js/actions/index.js';
import BucketList from './BucketList.jsx';
import Destination from './Destination.jsx';
import Login from './Login.jsx';
import Memories from './Memories.jsx';
import NavigationBar from './NavigationBar.jsx';
import User from './User.jsx';

//changes views between login page, destination page and profile page
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reRender: false,
    }

    this.rerenderNavBar = this.rerenderNavBar.bind(this);
  }

  rerenderNavBar() {
    this.setState((prevState) => {
      return { reRender: !prevState.reRender }
    })    
  }

  render() {
    return (
      <div>
        <NavigationBar rerender={this.state.reRender}/>  
        <Switch>
          <Route
            exact path='/'
            render={(props) => <Login {...props} rerenderNavBar={this.rerenderNavBar} />}
          />
          <Route path='/destination' component={Destination} />
          {/* <Route exact path='/user' component={User} />
          <Route exact path='/user/bucket_list' component={BucketList} />
          <Route exact path='/user/memories' component={Memories} /> */}
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