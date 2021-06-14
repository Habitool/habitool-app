import Axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT
} from '../constants/userConstants';

const signin = async (email, password, dispatch) => {
  console.log('email1 is',email);
  const copyEmail = email;
  // return async (dispatch) => {
  // dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    console.log('email2 is', copyEmail);
    const {data} = await Axios.post('/login', { email: copyEmail, password });
    console.log('query result',data);
    const { email, fullName, habit } = data.doc;
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: {email: copyEmail, fullName, habit} });
    // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (name, email, password) => async (dispatch) => {
  // dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const { data } = await Axios.post('/signup', { name, email, password });
    console.log(data);
    const actionPayload = { email, fullName: name };
    dispatch({ type: USER_REGISTER_SUCCESS, payload: actionPayload });
    // Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export { signin, register, logout };