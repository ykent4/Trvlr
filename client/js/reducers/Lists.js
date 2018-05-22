import { 
  ADD_MEMORIES_SUCCESS, 
  REMOVE_MEMORIES_SUCCESS, 
  ADD_BUCKET_LIST_SUCCESS, 
  REMOVE_BUCKET_LIST_SUCCESS 
} from '../actions';

export default function (state = {user: {}, destination: {}}, action) {
  switch (action.type) {
    case ADD_MEMORIES_SUCCESS:
      let newState;
      newState = Object.assign({}, state);
      console.log('add memories success data ', action.payload.data);
      if(action.payload.data.user){
        newState.user = action.payload.data
      } else if (action.payload.data.destinations){
        newState.destination = action.payload.data        
      }
      return newState;

    case REMOVE_MEMORIES_SUCCESS:
      newState = Object.assign({}, state);
      if(action.payload.data.user){
        newState.user = action.payload.data
      } else if (action.payload.data.destinations){
        newState.destination = action.payload.data        
      }
    return newState;

    case ADD_BUCKET_LIST_SUCCESS:
      newState = Object.assign({}, state);
      if(action.payload.data.user){
        newState.user = action.payload.data
      } else if (action.payload.data.destinations){
        newState.destination = action.payload.data        
      }
      return newState;

    case REMOVE_BUCKET_LIST_SUCCESS:
      newState = Object.assign({}, state);
      if(action.payload.data.user){
        newState.user = action.payload.data
      } else if (action.payload.data.destinations){
        newState.destination = action.payload.data        
      }
      return newState;

    default:
      return state;
  }
}