import { GET_USER_SUCCESS, SIGN_UP_USER_SUCCESS  } from '../actions';

export default function (state = {user: {username: 'user'}}, action) {
  // console.log('user login reducers ', action);
  switch (action.type) {
    case GET_USER_SUCCESS:
    // console.log('action payload ', action.payload.data);
      let newState;
      newState = Object.assign({}, state);
      newState.user = action.payload.data;
      return newState;

    case SIGN_UP_USER_SUCCESS:

      newState = Object.assign({}, state);
      newState.user = action.payload.data;
      return newState;

    default:
      return state;
  }
};