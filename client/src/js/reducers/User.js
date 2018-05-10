import { GET_USER } from '../actions';
import { initialState } from './index.js'

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;

    default:
      return state;
  }
};