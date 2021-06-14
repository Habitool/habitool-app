import React from 'react';
import '../stylesheets/screens/DashboardScreen.css';

// Component Imports
import StarterTile from '../components/StarterTile';
import HabitTile from '../components/HabitTile';


const DashboardScreen = () => {
  return (
    <div className="dashboard__screen">
      <div className="dashboard__habit-tiles">
        <StarterTile />
        <HabitTile />
        <HabitTile />
      </div>
    </div>
  );
};

export default DashboardScreen;
