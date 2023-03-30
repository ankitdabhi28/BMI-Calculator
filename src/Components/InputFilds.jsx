import React, { useState } from "react";
import { setBmi } from "./Redux/ForState/BmiState";
import { setInfo } from "./Redux/ForState/InfoState";
import { dispatch } from "./Redux/store";

function InputFilds() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    dispatch(setBmi(val));
    if (val < 18.5) {
      dispatch(setInfo("Under Weight"));
    } else if (val > 18.5 && val <= 24.9) {
      dispatch(setInfo("Healthy"));
    } else if (val > 24.9 && val < 30) {
      dispatch(setInfo("Overweight"));
    } else {
      dispatch(setInfo("Obese"));
    }
  };

  return (
    <div>
      <div>
        <h1>BMI Calculator</h1>
        <div>
          <input
            className="int"
            min={30}
            type="number"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in Centi-Meter"
          />
        </div>
        <div>
          <input
            className="int"
            min={1}
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in Kilo-Gram"
          />
        </div>
        <button className="btn" onClick={handleBmi}>Calculate</button>
      </div>
    </div>
  );
}

export default InputFilds;
