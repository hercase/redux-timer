export const TYPES = {
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  RESET_TIMER: "RESET_TIMER",
  CHANGE_TICK: "CHANGE_TICK",
};

// Actions Creators

export const startTimer = () => ({ type: TYPES.START_TIMER });

export const stopTimer = () => ({ type: TYPES.STOP_TIMER });

export const resetTimer = () => ({ type: TYPES.RESET_TIMER });

export const changeTick = (tick) => ({
  type: TYPES.CHANGE_TICK,
  payload: tick,
});
