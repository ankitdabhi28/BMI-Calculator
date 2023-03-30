import React from "react";
import { useSelector } from "react-redux";

function PrintData() {
  const bmi = useSelector((state) => state.Bmi.Bmi);
  console.log(bmi, "BMI State");

  const info = useSelector((state) => state.Info.Info);
  console.log(info, "Info State");
  return (
    <div className="print">
      <h1>
        <span>BMI :</span>
        <span>{bmi}</span>
      </h1>
      <h2>
        <span>Category :</span>
        <span>{info}</span>
      </h2>
    </div>
  );
}

export default PrintData;
