import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Import Css
import '../stylesheets/screenStyles/LoginScreen.css';

// Import signin action from userActions.js
import { signin } from '../redux/actions/userActions';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(`/dashboard/${userInfo.name}`);
    }
  }, [userInfo]);

  return (
    <div className="login__screen">
      <div className="loginScreen__form-container">
        <h1>Login</h1>
        <form onSubmit={loginSubmitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Email' id="email" type="email" autoComplete="off" required onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" placeholder='Password' id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <button id="login__btn" type="submit"> Login </button>
            <span id="signup-redirect">Not a User? <Link to='/signup' id="login-form__signup-btn">Sign Up</Link> </span>
          </div>
          <div className="signup__message">
            {loading && <h4>Loading...</h4>}
            {error && <h4>{error}</h4>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

