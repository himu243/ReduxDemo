// import {ORDER_CAKE, RESTOCK_CAKE} from '../actions/cakeActions';

import {ORDER_CAKE, RESTOCK_CAKE} from '../actions/cakeActions';

const INITIAL_STATE = {
  numOfCakes: 10,
};

const cakeReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ORDER_CAKE:
      return {...state, numOfCakes: state.numOfCakes - payload};
    case RESTOCK_CAKE:
      return {...state, numOfCakes: state.numOfCakes + 1};
    default:
      return state;
  }
};

export default cakeReducer;

// const val = {a: 1, b: 2, a: 3};
// return {...state, obj: {...state.obj, val: state.obj.val - 1}}; // { numOfCakes: }
