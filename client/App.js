import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App CSS Import
import './stylesheets/App.css';

// Screens Imports
import DashboardScreen from './screens/DashboardScreen';
import HabitScreen from './screens/HabitScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Component Imports
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Menu />
      <Overlay />
      <h1>Hello From HabitTool</h1>
    </Router>
  );
};

export default App;
