import React from "react";
import "./App.css";

import { Timer } from "./components/Timer";
import { Start } from "./components/Start";
import { Stop } from "./components/Stop";
import { Reset } from "./components/Reset";
import { useDispatch, useSelector } from "react-redux";
import { changeTick } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { running, tick } = useSelector((state) => state);

  const handleTick = (e) => {
    dispatch(changeTick(e.target.value));
  };

  return (
    <div className="App">
      <div className="title">
        <h3>Redux Counter</h3>
        <pre style={{ fontSize: "1rem" }}>by HerCase</pre>
      </div>
      <div className="container">
        <b> {running ? "Running 🏃‍♂️" : "Stopped 🚶‍♂️"}</b>
        <Timer />
        <Start />
        <Stop />
        <div>
          <span>{tick}</span>
          <input
            defaultValue={tick}
            onChange={handleTick}
            type="range"
            min="1"
            max="10"
            step="1"
          />
        </div>
        <Reset />
      </div>
    </div>
  );
}

export default App;
