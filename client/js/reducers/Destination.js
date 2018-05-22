import { GET_DESTINATIONS, GET_DESTINATIONS_SUCCESS, ADD_MEMORIES_SUCCESS } from '../actions';

export default function (state = {destinations: []}, action) {
  switch (action.type) {
    case GET_DESTINATIONS_SUCCESS:
      let newState;
      newState = Object.assign({}, state);
      newState.destinations = action.payload.data;
      return newState;

    case ADD_MEMORIES_SUCCESS:
      newState = Object.assign({}, state);
      newState.destinations = action.payload.data;
      return newState;

    default:
      return state;
  }
};
