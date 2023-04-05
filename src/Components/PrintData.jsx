import React from "react";
import { useSelector } from "react-redux";

function PrintData() {
  const bmi = useSelector((state) => state.Height.Bmi);
  const info = useSelector((state) => state.Height.Info);

  // console.log(bmi, "BMI State");
  // console.log(info, "Info State");

  return (
    <div className="container mt-5 ">

      <div className="card text-white shadow bg-secondary m-1 ">
        <div className="row card-body">
          <h4 className="col-12 col-md-2"> BMI :</h4>
          <h4 className="col-12 col-md-10"> {bmi}</h4>
        </div>
      </div>

      <div className="card text-white shadow bg-secondary m-1">
        <div className="row card-body">
          <h4 className="col-12 col-md-2" >Category : </h4>
          <h4 className="col-12 col-md-10"> {info}</h4>
        </div>
      </div>
      
    </div>
  );
}

export default PrintData;
