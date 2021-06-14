import React, { useEffect, useState } from 'react';
import '../stylesheets/componentStyles/StarterTile.css';
import { createHabit } from '../redux/actions/habitActions';
import { connect, useDispatch, useSelect } from 'react-redux';

const mapStateToProps = state => ({
  email: state.user.email
});

const StarterTile = (props) => {
  const [name, setName] = useState('');
  const [cadence, setCadence] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  // const createdTile = useSelect(state => state.createTile)

  // on submit handler
  const createTileSubmitHandler = (e) => {
    e.preventDefault();

    createHabit({
      email: props.email,
      habit: name,
      description: description,
      total: 0,
      startDate: startDate,
      endDate: endDate,
      cadence: cadence
    }, dispatch);
  };

  return (
    <form className="starter-tile" onSubmit={createTileSubmitHandler}>
      <div className="starter-tile__header">
        <input type="text" name="habitTitle" placeholder="Add Habit Title" required onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="starter-tile__content-container">
        <div className="starter-tile__repeater">
          <label htmlFor="cadence-selector">Select weekly habit goal:</label>
          <select name="cadence-selector" id="cadence-selector" required onChange={(e) => setCadence(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div id="start-date-group">
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" name="habit-start" required onChange={(e) => setStartDate(e.target.value)}/>
        </div>
        <div id="end-date-group">
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="habit-end" required onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div className="starter-tile__description">
          <label htmlFor="habit-description">Describe your goal...</label>
          <textarea type="text" name="habit-description" id="habit-description" rows="4" placeholder="" required onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="starter-tile__add-btn">
          <button type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, null)(StarterTile);
