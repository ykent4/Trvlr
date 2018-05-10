import { TOGGLE_USER_VIEW } from '../actions';
import { initialState } from './index.js'

export default function (state = {}, action) {
  switch (action.type) {
    case TOGGLE_USER_VIEW:
      newState = Object.assign({}, state);
      newState.userView = !action.userView;
      return newState;

    default:
      return state;
  }
};