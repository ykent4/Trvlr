import { GET_DESTINATIONS, GET_DESTINATIONS_SUCCESS } from '../actions';

export default function (state = {destinations: []}, action) {
  switch (action.type) {
    case GET_DESTINATIONS_SUCCESS:
    console.log('action payload ', action.payload.data);
      let newState;
      newState = Object.assign({}, state);
      newState.destinations = action.payload.data;
      return newState;

    default:
      return state;
  }
};