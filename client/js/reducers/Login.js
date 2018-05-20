// import { TOGGLE_LOGIN_VIEW } from '../actions';

// export default function (state = true, action) {
//   switch (action.type) {
//     case TOGGLE_LOGIN_VIEW:
//       newState = Object.assign({}, state);
//       newState.loginView = !action.loginView;
//       return newState;

//     default:
//       return state;
//   }
// };

import { GET_USER, GET_USER_SUCCESS } from '../actions';

export default function (state = {user: {username: 'user'}}, action) {
  // console.log('user login reducers ', action);
  switch (action.type) {
    case GET_USER_SUCCESS:
    // console.log('action payload ', action.payload.data);
      let newState;
      newState = Object.assign({}, state);
      newState.user = action.payload.data;
      return newState;

    default:
      return state;
  }
};