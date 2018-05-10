import { TOGGLE_DESTINATION_VIEW } from '../actions';
import { initialState } from './index.js'

export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_DESTINATION_VIEW:
      newState = Object.assign({}, state);
      newState.destinationView = !action.destinationView;
      return newState;

    default:
      return state;
  }
};