import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTimer } from "../redux/actions";

export const Reset = () => {
  const dispatch = useDispatch();
  const running = useSelector((state) => state.running);

  const handleReset = () => {
    dispatch(resetTimer());
  };

  return (
    <button disabled={running} onClick={handleReset}>
      ⛔
    </button>
  );
};
