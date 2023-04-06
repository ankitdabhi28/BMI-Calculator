import React from "react";
import { useSelector } from "react-redux";

const AllDataComponent = () => {
  const a = useSelector((state) => state.DataPrint.DataPrint);
  console.log("A data", a);
  return (
    <div>
      {/* <div className="row">
        <div className="card col-2 p-3">
          <div className="col-12 justify-content-center row ">
            <div className="col-4">Height :</div>
            <div className="col-4">150</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">weight : </div>
            <div className="col-4">50</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">BMI :</div>
            <div className="col-4">22.2</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">Category:</div>
            <div className="col-4">Healthy</div>
          </div>
        </div>
        <div className="card col-2 p-3">
          <div className="col-12 justify-content-center row ">
            <div className="col-4">Height :</div>
            <div className="col-4">150</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">weight : </div>
            <div className="col-4">50</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">BMI :</div>
            <div className="col-4">22.2</div>
          </div>
          <div className="col-12 justify-content-center row">
            <div className="col-4">Category:</div>
            <div className="col-4">Healthy</div>
          </div>
        </div>
      </div> */}
      <div className="container myBlock card shadow mt-5 ">
        <div className="row ">
          {a.map((d, i) => (
            <div key={i} className="col-3 p-2">
              <div className="card p-2 text-white shadow bg-secondary">
                <div className=" justify-content-center col-12  row ">
                  <div className="col-4">Height :</div>
                  <div className="col-6">{d.Height}</div>
                </div>
                <div className="justify-content-center  col-12  row">
                  <div className="col-4">weight : </div>
                  <div className="col-6">{d.Weight}</div>
                </div>
                <div className="justify-content-center col-12 row">
                  <div className="col-4">BMI :</div>
                  <div className="col-6">{d.Bmi}</div>
                </div>
                <div className="justify-content-center col-12 row">
                  <div className="col-4">Category:</div>
                  <div className="col-6">{d.Info}</div>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>Height : {d.Height}</div>
              <div>weight : {d.Weight}</div>
              <div>BMI : {d.Bmi}</div>
              <div> Category : {d.Info}</div> */}
    </div>
  );
};

export default AllDataComponent;
