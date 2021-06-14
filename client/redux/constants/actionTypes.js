// actions = plain JS objects
// type property indicates type of action being performed
// type defined as string of constants

//**ACTION TYPES**//
//HABITS//

// create a habit
export const CREATE_HABIT_REQUEST = 'CREATE_HABIT_REQUEST';
export const CREATE_HABIT_SUCCESS = 'CREATE_HABIT_SUCCESS';
export const CREATE_HABIT_FAIL = 'CREATE_HABIT_FAIL';

// update a habit
export const UPDATE_HABIT_REQUEST = 'UPDATE_HABIT_REQUEST';
export const UPDATE_HABIT_SUCCESS = 'UPDATE_HABIT_SUCCESS';
export const UPDATE_HABIT_FAIL = 'UPDATE_HABIT_FAIL';

// delete a habit
export const DELETE_HABIT_REQUEST = 'DELETE_HABIT_REQUEST';
export const DELETE_HABIT_SUCCESS = 'DELETE_HABIT_SUCCESS';
export const DELETE_HABIT_FAIL = 'DELETE_HABIT_FAIL';

// set start date
export const SET_START_REQUEST = 'SET_START_REQUEST';
export const SET_START_SUCCESS = 'SET_START_SUCCESS';
export const SET_START_FAIL = 'SET_START_FAIL';

// set end date
export const SET_END_REQUEST = 'SET_END_REQUEST';
export const SET_END_SUCCESS = 'SET_END_SUCCESS';
export const SET_END_FAIL = 'SET_END_FAIL';

// set goal
export const SET_GOAL_REQUEST = 'SET_GOAL_REQUEST';
export const SET_GOAL_SUCCESS = 'SET_GOAL_SUCCESS';
export const SET_GOAL_FAIL = 'SET_GOAL_FAIL';