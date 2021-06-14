import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../stylesheets/componentStyles/HabitTile.css';
import { connect, useDispatch } from 'react-redux';

import { deleteHabit } from '../redux/actions/habitActions';

const mapStateToProps = state => ({
  email: state.user.email
});

const HabitTile = (props) => {
  const dispatch = useDispatch();
  const deleteHabitHandler = () => {
    deleteHabit({ email: props.email, habit: props.name }, dispatch);
  };

  // const incrementProgress = () => {

  // }


  return (
    <div className="habit-tile">
      <div className="habit-tile__header">
        <h2>
          <Link to='habit/123'>{props.name}</Link>
        </h2>
      </div>
      <div className="habit-tile__content-container">
        <div className="habit-tile__goal-desc">
          <h4>Your Goal:</h4>
          <p>{props.description}</p>
        </div>
        <div className="habit-tile__streak">
          <span>
            <h4>Your Streak:</h4> 
            <span>{props.streak}</span>
          </span>
        </div>
        <div className="habit-tile__days-grp">
          <h4>Days Completed:</h4>
          <div className="habit-tile__days">
            <div className="mon-check">
              <label htmlFor="mon-check">Mon</label>
              <input id="mon-check" name="mon-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="tue-check">
              <label htmlFor="tue-check">Tue</label>
              <input id="tue-check" name="tues-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="wed-check">
              <label htmlFor="wed-check">Wed</label>
              <input id="wed-check" name="wed-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="thu-check">
              <label htmlFor="thurs-check">Thu</label>
              <input id="thu-check" name="thurs-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="fri-check">
              <label htmlFor="fri-check">Fri</label>
              <input id="fri-check" name="fri-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="sat-check">
              <label htmlFor="sat-check">Sat</label>
              <input id="sat-check" name="sat-check" type="checkbox" value="1" disabled/>
            </div>

            <div className="sun-check">
              <label htmlFor="sun-check">Sun</label>
              <input id="sun-check" name="sun-check" type="checkbox" value="1" disabled/>
            </div>
          </div>
        </div>
        <div className="habit-tile__btn-grp">
          <button id="habit__check-btn">
            <i className="fas fa-check"></i>
          </button>
          <Link to={`dashboard/habit/${props.name}`} id="habit__edit-btn">
            <i className="fas fa-pen"></i>
          </Link>

          <button id="habit__delete-btn" onClick={deleteHabitHandler}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};



export default connect(mapStateToProps, null)(HabitTile);