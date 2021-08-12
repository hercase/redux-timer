import React from "react";
import { useDispatch } from "react-redux";
import { stopTimer } from "../redux/actions";

export const Stop = () => {
  const dispatch = useDispatch();

  const handleStop = () => {
    dispatch(stopTimer());
  };

  return <button onClick={handleStop}>⏸</button>;
};
