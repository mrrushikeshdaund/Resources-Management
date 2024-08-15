import { createStore } from 'redux';

// Define an initial state
const initialState = {
  counter: 0,
  pointer: 'Rushikesh Daund'
};

// Create a reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 ,pointer:'Increment Pointer by 1'};
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1,pointer:'Decrement Pointer by 1' };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
