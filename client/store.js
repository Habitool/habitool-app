// store = single source of truth
// access via getState()
// update via dispatch(action)
// register/unregister listener via subscribe(listener)

//import redux from 'redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// do we need access to Redux dev tools?
const store = createStore(
  reducers,
  composeWithDevTools()
);

// console.log('Initial State: ', store.getState());
//do we need a store.subscribe statement here?
//store.subscribe(()  => console.log('Updated State: ', store.getState()));

export default store;