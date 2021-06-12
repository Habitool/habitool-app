import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// App CSS Import
import './stylesheets/App.css';

// Screens Imports
// import DashboardScreen from './screens/DashboardScreen';
// import HabitScreen from './screens/HabitScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Component Imports
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Menu from './components/Menu';

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar click={() => setMenuToggle(true)} />
      <Menu show={menuToggle} click={() => setMenuToggle(false)} />
      <Overlay show={menuToggle} click={() => setMenuToggle(false)} />
      {/* <h1>Hello From HabiTool</h1> */}
      <main>
        <Switch>
          <Route exact path='/signup' component={SignupScreen} />
          <Route exact path='/' render={() => <LoginScreen isLoggedIn={loggedIn}  loggedInSetter={setLoggedIn} />} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
