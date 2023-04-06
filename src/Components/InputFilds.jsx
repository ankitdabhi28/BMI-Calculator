import React from "react";
import { useSelector } from "react-redux";
import { setHeight,setBmi ,setWeight,setInfo  } from "./Redux/ForState/HeightState";
import { setDataPrint } from "./Redux/ForState/DataPrintState";
import { dispatch } from "./Redux/store";

function InputFilds() {
  
  
  const height = useSelector((state) => state.Height.Height);
  const weight = useSelector((state) => state.Height.Weight);
  const BMI = useSelector((state) => state.Height.Bmi);
  const INFO = useSelector((state) => state.Height.Info);
  const DataPrint = useSelector((state) => state.DataPrint.DataPrint);
  const AllOverData = useSelector((state) => state.Height)
  
  // const b = useSelector((state) => state.DataPrint.DataPrint.Info);
  console.log("AllOverData State",AllOverData );
  
  console.log( "DataPrint State",DataPrint); 
  console.log("BMI State",BMI);
  console.log( "Info State", INFO);
  
  // const [ForArr, setForArr] = useState([]);
  // console.log("ForArr" ,ForArr);

  // const handlePrint = () => {
  //   setForArr([...ForArr, d]);
  //   // setForArr([...ForArr, {height ,weight ,BMI ,INFO }]);
  //   dispatch(setDataPrint(ForArr))
  // };

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
    // dispatch(setDataPrint([...DataPrint,AllOverData]))
    // dispatch(setDataPrint(AllOverData));

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
                  onClick={ ()=> dispatch(setDataPrint([...DataPrint,AllOverData])) }
                >
                DataPrint
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputFilds;
