import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { setBmi } from "./Redux/ForState/BmiState";
import { setHeight,setBmi ,setWeight,setInfo } from "./Redux/ForState/HeightState";
// import { setInfo } from "./Redux/ForState/InfoState";
// import { setWeight } from "./Redux/ForState/WeightState";
import { dispatch } from "./Redux/store";

function InputFilds() {
  
  
  const height = useSelector((state) => state.Height.Height);
  const weight = useSelector((state) => state.Height.Weight);
  const BMI = useSelector((state) => state.Height.Bmi);
  const INFO = useSelector((state) => state.Height.Info);
  
  
  // console.log(weight, "weight State");
  // console.log(height, "height State");
  console.log(BMI, "BMI State");
  console.log(INFO, "Info State");
  
  const [ForArr, setForArr] = useState({
      BMI:BMI , INFO:INFO
  });
  console.log(ForArr, "ForArr");

  // eslint-disable-next-line
  let b=BMI , i=INFO ;

  const handlePrint = () => {

    // b = e.target.value
    // b = ForArr.BMI
    // i = ForArr.INFO

    // console.log(b ,i , "b & i Value");

    // setForArr( ForArr =>({...ForArr,BMI, INFO}) );
    // setForArr({...ForArr,BMI, INFO});
    setForArr({...ForArr,BMI:BMI, INFO:INFO});
  };

  // const handlePrint = useCallback(() => {
  //   setForArr({...ForArr,BMI:BMI, INFO:INFO});
  // },[ ])


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

    // setForArr({...ForArr,BMI, INFO});

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container ">
      <div>
        <h1 className="mt-3 text-decoration-underline text-success">
          BMI Calculator
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="row g-3 needs-validation">
        <div className="mt-4 needs-validation">
          <div className="row ">
            <div className="col-12  col-md-6 ">
              <div className="form-floating ">
                <input
                  className="form-control shadow"
                  required
                  min={30}
                  type="number"
                  onChange={(e) => dispatch(setHeight(e.target.value))}
                  placeholder="Height in Centi-Meter"
                />
                <label className="fw-lighter form-label">
                  Height in Centi-Meter
                </label>
              </div>
            </div>

            <div className="col-12 col-md-6 ">
              <div className="form-floating  ">
                <input
                  className="form-control shadow "
                  required
                  min={1}
                  type="number"
                  onChange={(e) => dispatch(setWeight(e.target.value))}
                  placeholder="Weight in Kilo-Gram"
                />
                <label className="fw-lighter form-label">
                  Weight in Kilo-Gram
                </label>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row justify-content-center">
              <div className="col-2">
                <button
                  className="btn btn-outline-primary mt-4  shadow"
                  type="submit"
                  onClick={handleBmi}
                >
                  Calculate
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-outline-primary  mt-4 shadow"
                  type="submit"
                  onClick={handlePrint}
                >
                  Print Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default InputFilds;
