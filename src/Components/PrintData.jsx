import React from "react";
import { useSelector } from "react-redux";

function PrintData() {
  const bmi = useSelector((state) => state.Bmi.Bmi);
  console.log(bmi, "BMI State");

  const info = useSelector((state) => state.Info.Info);
  console.log(info, "Info State");
  return (
    <div >
      <table >
      <tr> 
        <td> BMI : </td>
        <td className="fst">{bmi}</td>
      </tr>
      <tr>
        <td> Category : </td>
        <td className="fst">{info}</td>
      </tr>
    </table>
    </div>
  );
}

export default PrintData;
