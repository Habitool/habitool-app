import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { deleteHabit, updateHabit } from '../redux/actions/habitActions.js';

// import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';

const mapStateToProps = state => ({
  email: state.user.email,
  habit: state.user.habit,
  habitIndex: state.user.habitIndex,
});


// CSS import
import '../stylesheets/screenStyles/HabitScreen.css';


const HabitScreen = (props) => {
  const [newName, setNewName] = useState('');
  const [newCadence, setNewCadence] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStartDate, setNewStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  // const range = [{
  //   startDate: new Date(),
  //   endDate: addDays(new Date(), 10),
  //   key: 'selection'
  // }];
  const {habit, habitIndex} = props;

  // {
  //   email,
  //   habit,  
  //   newName,
  //   newDescription,
  //   newTotal,
  //   newStartDate,
  //   newEndDate,
  // } = req.body;
  
  const dispatch = useDispatch();
  const deleteHabitHandler = () => {
    deleteHabit({ email: props.email, habit: habit[habitIndex].name }, dispatch);
  };

  const editFormSubmit = (e) => {
    e.preventDefault();
    updateHabit({
      email: props.email,
      habit: habit[habitIndex].name,
      newName: newName,
      newDescription: newDescription,
      newTotal: 0,
      newStartDate: newStartDate,
      newEndDate: newEndDate
    }, dispatch);
    window.location.reload();
  };

  return (
    <div className="habitScreen">
      <div className="habitScreen__console">
        <div className="habitScreen__console-header">
          <h1>{habit[habitIndex].name}</h1>
        </div>

        <div className="habitScreen__console-info">
          <h2>Habit Info</h2>

          <div className="habitScreen__info-container">
            <div className="habitScreen__description">
              <h4>Your Goal:</h4>
              <p>
                {habit[habitIndex].description}
              </p>
            </div>

            <div className="habitScreen__current-streak">
              <h4>Current Overall Progress:</h4>
              <p><span>{habit[habitIndex].total}</span> days</p>

              <h4>Current Weekly Goal:</h4>
              <p><span>{habit[habitIndex].cadence}</span> days</p>
            </div>

            <div className="info-container__date-grp">
              <div id="info-date-range">
                <span>
                  <h4>Start Date:</h4>
                  <p>{habit[habitIndex].startDate}</p>
                </span>

                <span>
                  <h4>End Date:</h4>
                  <p>{ habit[habitIndex].endDate}</p>
                </span>
              </div>

              <div className="habitScreen__days-completed">
                <div className="habitScreen__mon-check">
                  <label htmlFor="mon-check">Mon</label>
                  <input id="mon-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__tue-check">
                  <label htmlFor="tue-check">Tue</label>
                  <input id="tue-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__wed-check">
                  <label htmlFor="wed-check">Wed</label>
                  <input id="wed-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__thu-check">
                  <label htmlFor="thurs-check">Thu</label>
                  <input id="thu-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__fri-check">
                  <label htmlFor="fri-check">Fri</label>
                  <input id="fri-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__sat-check">
                  <label htmlFor="sat-check">Sat</label>
                  <input id="sat-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__sun-check">
                  <label htmlFor="sun-check">Sun</label>
                  <input id="sun-check" type="checkbox" value="1" disabled/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="habitScreen__console-edit" onSubmit={editFormSubmit}>
          <div id="habitScreen__input-grp">
            <div className="habitScreen__edit-goal">
              <label htmlFor="cadence-selector">Update weekly habit goal:</label>
              <select name="cadence-selector" id="cadence-selector" onChange={e => setNewCadence(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          
            <div className="habitScreen__dates-select">
              <div id="habitScreen__start-date">
                <label htmlFor="start-date">Update Start Date:</label>
                <input type="date" id="start-date" name="habit-start" onChange={e => setNewStartDate(e.target.value)}/>
              </div>
              <div id="habitScreen__end-date">
                <label htmlFor="end-date">Update End Date:</label>
                <input type="date" id="end-date" name="habit-end" onChange={e => setNewEndDate(e.target.value)}/>
              </div>
            </div>

            <div className="habitScreen__description-edit">
              <label htmlFor="habit-description">Update your goal...</label>
              <textarea type="text" name="habit-description" id="habit-description" rows="6" placeholder="" onChange={e => setNewDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className="habitScreen__button-grp">
            <div>
              <Link to="/dashboard" id="habitScreen__back-btn">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </div>

            <div id="habitScreen__form-action-btns">
              <button id="habitScreen__update-btn" type="submit" onClick={editFormSubmit}>
                  Update
              </button>
              <Link to="/dashboard" id="habitScreen__delete-btn" type="submit" onClick={deleteHabitHandler}>
                  Delete
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(HabitScreen);
