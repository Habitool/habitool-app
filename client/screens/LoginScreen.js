import React from 'react';
import '../stylesheets/screens/LoginScreen.css';

const LoginScreen = () => {
  return (
    <div className="login__screen">
      <div className="loginScreen__form-container">
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="userName">Full Name</label>
            <input name="userName" placeholder='Sara Powers' id="userName" type="text" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='spowers@codesmith.io' id="email" type="email" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" placeholder='password' id="password" type="password" required/>
          </div>
          <div>
            <button type="button"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;