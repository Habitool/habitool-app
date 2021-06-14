import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/screenStyles/DashboardScreen.css';

// Component Imports
import StarterTile from '../components/StarterTile';
import HabitTile from '../components/HabitTile';


const mapStateToProps = state =>{
  console.log('state',state);
  console.log('state.user',state.user);
  console.log('state.user.habit',state.user.habit);

  return ({
    habits: state.user.habit
  });
}

const DashboardScreen = (props) => {
  const arr = [];
  console.log(props);
  console.log(props.habits);
  props.habits.forEach( (el, i) => {
    arr.push(<HabitTile key={i} buttonId={i} name={el.name} description={el.description} progress={el.progress} total />);
  }); 
  console.log(arr);
  return (
    <div className="dashboard__screen">
      <div className="dashboard__habit-tiles">
        <StarterTile />
        {arr}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(DashboardScreen);
