import * as types from '../constants/actionTypes';


export const submitLogin = loginID =>  ({
  type: types.SUBMIT_LOGIN,
  payload: loginID //how do we store email and password as single loginID (or some other var)?

});

//ADD more action creators once we confirm action types/how we are handling state