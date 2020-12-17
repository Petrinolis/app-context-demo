import { handleActions } from "redux-actions";

import actions from "./actions";

const initialState = { counter: 10 };

const reducerMap = {
  [actions.increment]: (state, { payload }) => {
    return { ...state, counter: state.counter + payload };
  },
  [actions.decrement]: (state, { payload }) => {
    return { ...state, counter: state.counter + payload };
  },
};

export default handleActions(reducerMap, initialState);
