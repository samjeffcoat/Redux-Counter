import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    //Everytime we increment we need to return a new state
    return {
      ...state,
      count: count ++

    }
    case DECREMENT:
    // Fill in the body of this case
    //everttune we decrement we have to update object to decrement
    default:
      return state;
  }
};
