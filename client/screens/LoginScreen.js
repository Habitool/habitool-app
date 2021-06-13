import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/screens/LoginScreen.css';

const LoginScreen = () => {
  return (
    <div className="login__screen">
      <div className="loginScreen__form-container">
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Email' id="email" type="email" autoComplete="off" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" placeholder='Password' id="password" type="password" required/>
          </div>
          <div>
            <button id="login__btn" type="button"> Login </button>
            <span id="signup-redirect">Not a User? <Link to='/signup' id="login-form__signup-btn">Sign Up</Link> </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;