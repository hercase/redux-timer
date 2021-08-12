import React from "react";
import { useDispatch } from "react-redux";
import { startTimer } from "../redux/actions";

export const Start = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startTimer());
  };

  return <button onClick={handleStart}>✅</button>;
};
