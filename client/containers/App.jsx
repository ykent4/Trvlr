import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom'

import Actions from '../js/actions/index.js';
// import BucketListContainer from './BucketListContainer';
import DestinationContainer from './DestinationContainer';
import LoginContainer from './LoginContainer';
// import MemoriesContainer from './MemoriesContainer.jsx';
import NavigationBarContainer from './NavigationBarContainer.jsx';
// import UserContainer from './UserContainer.jsx';

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
        <NavigationBarContainer rerender={this.state.reRender}/>  
        <Switch>
          <Route
            exact path='/'
            render={(props) => <LoginContainer {...props} rerenderNavBar={this.rerenderNavBar} />}
          />
          <Route path='/destination' component={DestinationContainer} />
          {/* <Route exact path='/user' component={User} />
          <Route exact path='/user/bucket_list' component={BucketList} />
          <Route exact path='/user/memories' component={Memories} /> */}
        </Switch>
      </div>
    );
  }

}

export default App;