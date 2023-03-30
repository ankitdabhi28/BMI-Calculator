import React from "react";
import { useSelector } from "react-redux";

function PrintData() {
  const bmi = useSelector((state) => state.Bmi.Bmi);
  console.log(bmi, "BMI State");

  const info = useSelector((state) => state.Info.Info);
  console.log(info, "Info State");
  return (
    <div>
      <div>
        <h1>{bmi}</h1>
        <h2>{info}</h2>
      </div>
    </div>
  );
}

export default PrintData;
