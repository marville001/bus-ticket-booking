import { FETCH_TICKETS } from "../actions/types";
//
//
const initialState = {
  tickets: [],
  loading: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return { ...state, tickets: state.tickets };
    default:
      return state;
  }
};

export default searchReducer;
