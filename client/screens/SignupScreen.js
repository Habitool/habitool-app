import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Import CSS
import '../stylesheets/screenStyles/SignupScreen.css';

// Import Register Action from userActions
import { register } from '../redux/actions/userActions';

const SignupScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // Pull userRegister state object from State using useSelector hook
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  // signup form submit handler function
  // on form submit will dispatch register action func
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  // render login screen once user registers
  useEffect(() => {
    if(userInfo) {
      props.history.push('/');
    }
  }, [userInfo]);

  return (
    <div className="signup__screen">
      <div className="signupScreen__form-container">
        <h1>Sign Up</h1>
        <form onSubmit={signupSubmitHandler}>
          <div className="signup__input-group">
            <label htmlFor="userName">Full Name</label>
            <input name="userName" placeholder='Full Name' id="userName" type="text" required onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="signup__input-group">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Email' id="email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="signup__input-group">
            <label htmlFor="password">Password</label>
            <input name="password" placeholder='Password' id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form__btn-group">
            <button type="submit">Submit</button>
            <Link to='/' id="form__cancel-btn">Cancel</Link> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;