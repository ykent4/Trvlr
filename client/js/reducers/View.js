import { CHANGE_VIEW } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      newState = Object.assign({}, state);
      newState.view = action.view;
      return newState;

    default:
      return state;
  }
};