import React from 'react';


// import { Calendar } from 'react-date-range';
// import { addDays } from 'date-fns';

// CSS import
import '../stylesheets/screenStyles/HabitScreen.css';

const HabitScreen = () => {
  // const range = {
  //   startDate: new Date(),
  //   endDate: addDays(new Date(), 10),
  //   key: 'selection'
  // };

  return (
    <div className="habitScreen">
      <div className="habitScreen__console">
        <div className="habitScreen__console-header">
          <h1>Exercise</h1>
        </div>
        <div className="habitScreen__console-main">
          {/* <Calendar ranges={range} /> */}
        </div>
        <div className="habitScreen__console-edit">
          Main Console Section
        </div>
      </div>
    </div>
  );
};

export default HabitScreen;
