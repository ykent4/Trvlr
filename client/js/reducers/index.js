import { combineReducers } from "redux";

// import LoginView from './LoginView';
// import DestinationView from './DestinationView';
// import UserView from './UserView';
import User from './User';
import Destination from './Destination';
import View from './View';
import Login from './Login';

const rootReducer = combineReducers({
  // LoginView,
  // DestinationView,
  // UserView,
  Login,
  User,
  Destination,
  View,
});

export default rootReducer;
