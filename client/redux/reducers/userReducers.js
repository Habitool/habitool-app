// import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT } from '../constants/userConstants';
// import * as types from '../constants/actionTypes';
import * as types from '../constants/userConstants.js';
import * as actionTypes from '../constants/actionTypes.js';


const initialState = {
  email: '',
  // password: '',
  fullName: '',
  habit: [], //array of objects
  signupLoading: false, 
  signinLoading: false,
  error: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type){
  case types.CREATE_NEWUSER: return {
    ...state,
    email: action.payload.email, // have we saved userInput email in some var?
    // password: state.password.anchor, // have we saved userInput password in some var?
    fullname: action.payload.fullname
  };
  case types.USER_SIGNIN_REQUEST:
    return {...state, signinLoading: true };
  case types.USER_SIGNIN_SUCCESS:
    console.log('action payload for sucessful signin', action.payload);
    return {...state, signinloading: false, email: action.payload.email, fullName: action.payload.fullName, habit: action.payload.habit };
  case types.USER_SIGNIN_FAIL:
    return {...state, signinLoading: false, error: action.payload };
  case types.USER_LOGOUT:
    return {...initialState};
  // case types.SUBMIT_LOGIN: return {
  //   ...state,
  //   email: state.email, // have we saved userInput email in some var?
  //   password: state.password.anchor, // have we saved userInput password in some var?
  //   fullname: state.fullname
  // };
  case types.USER_REGISTER_REQUEST:
    return {...state, signupLoading: true };
  case types.USER_REGISTER_SUCCESS:
    return {...state, signupLoading: false, email: action.payload.email, fullName: action.payload.fullName };
  case types.USER_REGISTER_FAIL:
    return {...state, signupLoading: false, error: action.payload };
  case actionTypes.CREATE_HABIT_SUCCESS: {
    console.log(action.payload);
    return {...state, habit: action.payload};
  }
  case actionTypes.DELETE_HABIT_SUCCESS: {
    console.log(action.payload);
    return {...state, habit: action.payload};
  }
  
  default: 
    return state;
  }
};


// function userSigninReducer(state = {}, action) {
//   switch (action.type) {
//     case types.USER_SIGNIN_REQUEST:
//       return { signinLoading: true };
//     case types.USER_SIGNIN_SUCCESS:
//       return { signloinading: false, userInfo: action.payload };
//     case types.USER_SIGNIN_FAIL:
//       return { loading: false, error: action.payload };
//     case types.USER_LOGOUT:
//       return {...initialState};
//     case types.SUBMIT_LOGIN: return {
//       ...state,
//       email: state.email, // have we saved userInput email in some var?
//       password: state.password.anchor, // have we saved userInput password in some var?
//       fullname: state.fullname
//     };
//     default: return state;
//   }
// }

// function userRegisterReducer(state = {}, action) {
//   switch (action.type) {
//   case USER_REGISTER_REQUEST:
//     return { loading: true };
//   case USER_REGISTER_SUCCESS:
//     return { loading: false, userInfo: action.payload };
//   case USER_REGISTER_FAIL:
//     return { loading: false, error: action.payload };
//   default: return state;
//   }
// }
export { userReducer };