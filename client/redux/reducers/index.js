import { combineReducers } from 'redux';

import habitReducer from './habitReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

// combine reducers
const reducers = combineReducers({
  habits: habitReducer,
  sessions: loginReducer,
  users: signupReducer
});
  
export default reducers;