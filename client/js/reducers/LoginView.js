import { TOGGLE_LOGIN_VIEW } from '../actions';
import { initialState } from './index.js'

export default function (state = true, action) {
  switch (action.type) {
    case TOGGLE_LOGIN_VIEW:
      newState = Object.assign({}, state);
      newState.loginView = !action.loginView;
      return newState;

    default:
      return state;
  }
};