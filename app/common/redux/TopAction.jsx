import { createAction, handleActions } from 'redux-actions';

const TOP = 'TOP';
const TOP_COUNTER_INCREMENT = TOP + '_COUNTER_INCREMENT';
const TOP_COUNTER_DECREMENT = TOP + '_COUNTER_DECREMENT';

export function increment(){
  return createAction(TOP_COUNTER_INCREMENT)();
}

export function decrement(){
  return createAction(TOP_COUNTER_DECREMENT)();
}


const initialState = {
  counter: 0
};

export default handleActions({
  [TOP_COUNTER_INCREMENT]: (state) => ({
    ...state,
    counter: state.counter + 1
  }),
  [TOP_COUNTER_DECREMENT]: (state) => ({
    ...state,
    counter: state.counter - 1
  })
}, initialState)