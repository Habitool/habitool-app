import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/screenStyles/DashboardScreen.css';

// Component Imports
import StarterTile from '../components/StarterTile';
import HabitTile from '../components/HabitTile';

// const nums = [1, 2, 3];
// const doubledNums = nums.map(num => num * 2);
// const doubledNums2 = nums.map(num => {
//   return num * 2;
// });
// const doubledNums3 = nums.map(num => {
//   let numNew = num * 2;
//   newNum = num % 35;
//   newNum = `${newNum} is the newNum, bayBEEE!!`;

//   return newNum;
// });

const mapStateToProps = state =>{
  console.log('state',state);
  console.log('state.user',state.user);
  console.log('state.user.habit',state.user.habit);

  return ({
    habits: state.user.habit
  });
};

const DashboardScreen = (props) => {
  const arr = [];
  console.log(props);
  console.log(props.habits);
  // convert timeOfDay property on props.habits to Integer
  // '11:44'.split(':') ==> ['11', '44']  ==> parseInt('11', 10) ===> 11 * 3600 == 234234234 seconds  
  
  const mappedHabits = props.habits.map(habit => {
    const [hours, minutes] = habit.timeOfDay.split(':');
    const parsedHours = parseInt(hours);
    const parsedMinutes = parseInt(minutes);
    const timeInSeconds = (parsedHours * 3600) + (parsedMinutes * 60);
    // const timeInSeconds = parseInt(habit.timeOfDay.split(':')[0], 10) * 3600 + parseInt(habit.timeOfDay.split(':')[1], 10) * 60;
    let newTimeofDay;

    if (timeInSeconds >= 3600 * 13) {
      newTimeofDay = parsedHours - 12 + ':' + minutes + ' PM';
    } else {
      newTimeofDay = parsedHours + ':' + minutes + ' AM';
    }
    // (timeInSeconds >= 3600 * 12) ? newTimeofDay += ' PM' : newTimeofDay += ' AM';
    return ({
      ...habit,
      timeInSeconds,
      timeOfDay: newTimeofDay,
    });
  });

  // const mappedHabits2 = props.habits.map(habit => (
  //   {
  //     ...habit,
  //     timeOfDay: parseInt(habit.timeOfDay.split(':')[0], 10) * 3600 + parseInt(habit.timeOfDay.split(':')[1], 10) * 60
  //   }
  // ));
  console.log('mappedHabits:', mappedHabits);

  // sort the habits by timeOfDay
  const sortedHabits = mappedHabits.sort((a, b) => a.timeInSeconds - b.timeInSeconds);
  console.log(sortedHabits);
  sortedHabits.forEach( (el, i) => {
    arr.push(
      <HabitTile
        key={i}
        buttonId={i}
        name={el.name}
        description={el.description}
        progress={el.progress}
        total
        timeOfDay={el.timeOfDay}
      />
    );
  }); 
  // console.log(arr);
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
