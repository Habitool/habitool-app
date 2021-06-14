import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';


// Import Css
import '../stylesheets/screenStyles/LoginScreen.css';

// Import signin action from userActions.js
import { signin } from '../redux/actions/userActions';


const mapStateToProps = state => ({
  loading: state.user.signinLoading,
  error: state.user.error,
  email: state.user.email
});

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const userSignin = useSelector(state => state.userSignin);
  // const { loading, userInfo, error } = userSignin;
  const loading = props.loading;
  const userInfo = props.email;
  const error = props.error;

  const history = useHistory()


  const loginSubmitHandler = (e) => {
    e.preventDefault();
    // dispatch(signin(email, password));
    signin(email,password, dispatch);
  };

  useEffect(() => {
    if (userInfo) {
      // history.push(`/dashboard/${userInfo.name}`);
      history.push(`/dashboard`);
    }
  }, [userInfo]);

  return (
    <div className="login__screen">
      <div className="loginScreen__form-container">
        <h1>Login</h1>
        {/* {userInfo ? <Redirect to='/dashboard'/> : null} */}
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

// export default LoginScreen;
export default connect(mapStateToProps, null)(LoginScreen);

