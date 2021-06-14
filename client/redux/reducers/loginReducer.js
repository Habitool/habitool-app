// (previousState, action) => newState
import * as types from '../constants/actionTypes';

const initialState = {
  email: '',
  password: ''
};

const loginReducer = (state = initialState, action) => {
  switch(action.type){
  case types.SUBMIT_LOGIN: return {
    ...state,
    email: state.currEmail, // have we saved userInput email in some var?
    password: state.currPassword // have we saved userInput password in some var?
  };

  default: return state;
  }
};

export default loginReducer;
