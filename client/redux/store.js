// store = single source of truth
// access via getState()
// update via dispatch(action)
// register/unregister listener via subscribe(listener)

//import redux from 'redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS IMPORT
import {
  userSigninReducer,
  userRegisterReducer
} from './reducers/userReducers';
// import reducers from './reducers/index';

// store middleware into an array
const middleware = [ thunk ];

// combine reducers into single reducer object using CombineReducer
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
});

// do we need access to Redux dev tools?
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)) // pass in apply middleware with middleware array so store utilizes required middlewares; i.e. redux thunk
);

// console.log('Initial State: ', store.getState());
//do we need a store.subscribe statement here?
//store.subscribe(()  => console.log('Updated State: ', store.getState()));

export default store;