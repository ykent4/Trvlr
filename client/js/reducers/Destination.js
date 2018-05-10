import { GET_DESTINATIONS, GET_DESTINATIONS_SUCCESS } from '../actions';
import { initialState } from './index.js'

export default function (state = {}, action) {
  console.log('destination reducers ', action);
  switch (action.type) {
    case GET_DESTINATIONS_SUCCESS:
    console.log('action payload ', action.payload.data);
      let newState;
      newState = Object.assign({}, state);
      newState.destination = action.payload.data;
      return newState;

    default:
      return state;
  }
};