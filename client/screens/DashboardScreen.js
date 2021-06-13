import React from 'react';
import '../stylesheets/screens/DashboardScreen.css';

// Component Imports
import StarterTile from '../components/StarterTile';


const DashboardScreen = () => {
  return (
    <div className="dashboard__screen">
      <div className="dashboard__habit-tiles">
        <StarterTile />
      </div>
    </div>
  );
};

export default DashboardScreen;
