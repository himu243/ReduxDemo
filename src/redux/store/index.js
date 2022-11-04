// import {combineReducers, legacy_createStore} from 'redux';
import cakeReducer from '../reducers/cakeReducer';

import {combineReducers, legacy_createStore} from 'redux';

// const rootReducer = combineReducers({
//   cakeData: cakeReducer,
//   icecreamData: cakeReducer,
// });
const rootReducer = combineReducers({
  cakeReducer,
});

const store = legacy_createStore(rootReducer);
// const store = legacy_createStore(cakeReducer);
export default store;

// const a = 10;
// const b = 20;

// const myObj = {a, b};
// console.log(myObj); // {a: 10, b: 20}
