import React from 'react';
import '../stylesheets/components/StarterTile.css';

const StarterTile = () => {
  return (
    <form className="starter-tile">
      <div className="starter-tile__header">
        <input type="text" name="habitTitle" placeholder="Add Habit Title" />
      </div>
      <div className="starter-tile__content-container">
        <div className="starter-tile__repeater">
          <label htmlFor="cadence-selector">Select weekly habit goal:</label>
          <select name="cadence-selector" id="cadence-selector">
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
          <input type="date" id="start-date" name="habit-start"/>
        </div>
        <div id="end-date-group">
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="habit-end"/>
        </div>
        <div className="starter-tile__description">
          <label htmlFor="habit-description">Describe your goal...</label>
          <textarea type="text" name="habit-description" id="habit-description" rows="4" placeholder=""></textarea>
        </div>
        <div className="starter-tile__add-btn">
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default StarterTile;
