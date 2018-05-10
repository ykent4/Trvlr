import { combineReducers } from "redux";

// import LoginView from './LoginView';
// import DestinationView from './DestinationView';
// import UserView from './UserView';
import User from './User';
import Destination from './Destination';

window.initialState = {
  // loginView: true,
  // destinationView: false,
  // userView: false,
  user: {},
  destinations: []
};

const rootReducer = combineReducers({
  // LoginView,
  // DestinationView,
  // UserView,
  User,
  Destination
});

export default rootReducer;
