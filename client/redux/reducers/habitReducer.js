// functions that accept state and action as args, return next state

import * as types from '../constants/actionTypes';

const initialHabitState = {
  name: '',
  description: '',
  progress: 0,
  total: 0,
  weekly: [],
  streak: 0,
  startDate: '',
  endDate: '',
  tasks: []
};

const habitReducer = (state = initialHabitState, action) => {
  //let habits; //do we need this?
  switch (action.type) {
  case types.CREATE_HABIT: return {
    ...state,
    habits: [action.payload],
  };
  
  default: {
    return state;
  }
  }
};

export default habitReducer;