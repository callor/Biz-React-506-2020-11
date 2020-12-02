import React from "react";

function CompDisp({ number }) {
  return (
    <div>
      <h3>
        {number} 와 20의 합 : {number + 20}{" "}
      </h3>
      <h3>
        {number} 와 {number}의 곱 : {number * number}{" "}
      </h3>
    </div>
  );
}

export default CompDisp;
