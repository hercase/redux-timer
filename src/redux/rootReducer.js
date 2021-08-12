import { TYPES } from "./actions";

const initialState = {
  running: false,
  reset: false,
  tick: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_TIMER:
      return { ...state, running: true, reset: false };

    case TYPES.CHANGE_TICK:
      return { ...state, tick: action.payload, running: false };

    case TYPES.STOP_TIMER:
      return { ...state, running: false };

    case TYPES.RESET_TIMER:
      return { ...state, reset: true };

    default:
      return initialState;
  }
};

export default rootReducer;
