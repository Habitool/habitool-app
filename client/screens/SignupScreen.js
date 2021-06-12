import React from 'react';
import '../stylesheets/screens/SignupScreen.css';

const SignupScreen = () => {
  return (
    <div className="signup__screen">
      <div className="signupScreen__form-container">
        <h1>Sign Up</h1>
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
            <button type="button"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;