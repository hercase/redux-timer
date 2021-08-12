import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const { running, reset, tick } = useSelector((state) => state);

  useEffect(() => {
    setSeconds(0);
  }, [reset]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setSeconds((seconds) => seconds + parseInt(tick));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  return <div>Counter: {seconds}</div>;
};
