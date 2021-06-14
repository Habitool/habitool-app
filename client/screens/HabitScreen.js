import React from 'react';
import { Link } from 'react-router-dom';


// import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';

// CSS import
import '../stylesheets/screenStyles/HabitScreen.css';
const HabitScreen = () => {
  // const range = [{
  //   startDate: new Date(),
  //   endDate: addDays(new Date(), 10),
  //   key: 'selection'
  // }];

  return (
    <div className="habitScreen">
      <div className="habitScreen__console">
        <div className="habitScreen__console-header">
          <h1>Exercise</h1>
        </div>

        <div className="habitScreen__console-info">
          <h2>Habit Info</h2>

          <div className="habitScreen__info-container">
            <div className="habitScreen__description">
              <h4>Your Goal:</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et gravida lectus, vel ultricies ligula.
              </p>
            </div>

            <div className="habitScreen__current-streak">
              <h4>Current Overall Progress:</h4>
              <p><span>15</span> days</p>

              <h4>Current Weekly Goal:</h4>
              <p><span>4</span> days</p>
            </div>

            <div className="info-container__date-grp">
              <div id="info-date-range">
                <span>
                  <h4>Start Date:</h4>
                  <p>{ new Date().toDateString()}</p>
                </span>

                <span>
                  <h4>End Date:</h4>
                  <p>{ new Date().toDateString()}</p>
                </span>
              </div>

              <div className="habitScreen__days-completed">
                <div className="habitScreen__mon-check">
                  <label htmlFor="mon-check">Mon</label>
                  <input id="mon-check" name="mon-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__tue-check">
                  <label htmlFor="tue-check">Tue</label>
                  <input id="tue-check" name="tues-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__wed-check">
                  <label htmlFor="wed-check">Wed</label>
                  <input id="wed-check" name="wed-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__thu-check">
                  <label htmlFor="thurs-check">Thu</label>
                  <input id="thu-check" name="thurs-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__fri-check">
                  <label htmlFor="fri-check">Fri</label>
                  <input id="fri-check" name="fri-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__sat-check">
                  <label htmlFor="sat-check">Sat</label>
                  <input id="sat-check" name="sat-check" type="checkbox" value="1" disabled/>
                </div>

                <div className="habitScreen__sun-check">
                  <label htmlFor="sun-check">Sun</label>
                  <input id="sun-check" name="sun-check" type="checkbox" value="1" disabled/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="habitScreen__console-edit">
          <div id="habitScreen__input-grp">
            <div className="habitScreen__edit-goal">
              <label htmlFor="cadence-selector">Update weekly habit goal:</label>
              <select name="cadence-selector" id="cadence-selector" required>
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
                <input type="date" id="start-date" name="habit-start"/>
              </div>
              <div id="habitScreen__end-date">
                <label htmlFor="end-date">Update End Date:</label>
                <input type="date" id="end-date" name="habit-end"/>
              </div>
            </div>

            <div className="habitScreen__description-edit">
              <label htmlFor="habit-description">Update your goal...</label>
              <textarea type="text" name="habit-description" id="habit-description" rows="6" placeholder=""></textarea>
            </div>
          </div>
          <div className="habitScreen__button-grp">
            <div>
              <Link to="/dashboard" id="habitScreen__back-btn">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </div>

            <div id="habitScreen__form-action-btns">
              <button id="habitScreen__update-btn" type="submit" onClick={null}>
                  Update
              </button>
              <Link to="/dashboard" id="habitScreen__delete-btn" type="submit" onClick={null}>
                  Delete
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HabitScreen;
