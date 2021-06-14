import Axios from 'axios';
import {
  CREATE_HABIT_REQUEST, CREATE_HABIT_SUCCESS, CREATE_HABIT_FAIL, 
  UPDATE_HABIT_REQUEST, UPDATE_HABIT_SUCCESS, UPDATE_HABIT_FAIL,
  DELETE_HABIT_REQUEST, DELETE_HABIT_SUCCESS, DELETE_HABIT_FAIL,
  SET_GOAL_REQUEST, SET_GOAL_SUCCESS, SET_GOAL_FAIL
} from '../constants/actionTypes';



// const createHabit = ( habits ) => {
//   return async (dispatch) => {
//     dispatch({ type: CREATE_HABIT_REQUEST, payload: { habits } });
//     try {
//       const { data } = await Axios.post('/', {  });
//       console.log(data);
//       dispatch({ type: CREATE_HABIT_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: CREATE_HABIT_FAIL, payload: error.message });
//     }
//   };
// };



const createHabit = async ( habits, dispatch ) => {
    dispatch({ type: CREATE_HABIT_REQUEST, payload: { habits } });
    const habitsCopy = habits;
    try {
      const { data } = await Axios.post('/habit/addHabit', habitsCopy);
      const habit = data.updatedDoc.habit;
      console.log(data); // {docs: {fdsjakl} } data.docs.habit
      dispatch({ type: CREATE_HABIT_SUCCESS, payload: habit });
    } catch (error) {
      dispatch({ type: CREATE_HABIT_FAIL, payload: error.message });
  }
};

const updateHabit = ( habits ) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_HABIT_REQUEST, payload: { habits } });
    try {
      const { data } = await Axios.post('/', {  });
      console.log(data);
      dispatch({ type: UPDATE_HABIT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_HABIT_FAIL, payload: error.message });
    }
  };
};

// const deleteHabit = ( habits ) => {
//   return async (dispatch) => {
//     dispatch({ type: DELETE_HABIT_REQUEST, payload: { habits } });
//     try {
//       const { data } = await Axios.post('/', {  });
//       console.log(data);
//       dispatch({ type: DELETE_HABIT_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: DELETE_HABIT_FAIL, payload: error.message });
//     }
//   };
// };
const deleteHabit = async ( habit, dispatch ) => {
  // habit: {email: 'user email', habit: 'habit name'}
  const habitCopy = habit;
  dispatch({ type: DELETE_HABIT_REQUEST });
  try {
    const { data } = await Axios.post('/habit/removeHabit',  habitCopy );
    console.log('hello 1');
    console.log(data);
    console.log('hello 2');
    const actionPayload = data.updatedDoc.habit;
    console.log('hello 3');
    console.log('action payload from delete habit', actionPayload);
    dispatch({ type: DELETE_HABIT_SUCCESS, payload: actionPayload });
  } catch (error) {
    dispatch({ type: DELETE_HABIT_FAIL, payload: error.message });
  }
};


// const setStartDate = ( habits ) => {
//   return async (dispatch) => {
//     dispatch({ type: SET_START_REQUEST, payload: { habits } });
//     try {
//       const { data } = await Axios.post('/', {  });
//       console.log(data);
//       dispatch({ type: SET_START_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: SET_START_FAIL, payload: error.message });
//     }
//   };
// };

// const setEndDate = ( habits ) => {
//   return async (dispatch) => {
//     dispatch({ type: SET_END_REQUEST, payload: { habits } });
//     try {
//       const { data } = await Axios.post('/', {  });
//       console.log(data);
//       dispatch({ type: SET_END_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: SET_END_FAIL, payload: error.message });
//     }
//   };
// };
//   return async (dispatch) => {
//     dispatch({ type: SET_GOAL_REQUEST, payload: { habits } });
//     try {
//       const { data } = await Axios.post('/', {  });
//       console.log(data);
//       dispatch({ type: SET_GOAL_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: SET_GOAL_FAIL, payload: error.message });
//     }
//   };
// };


export { createHabit, updateHabit, deleteHabit };