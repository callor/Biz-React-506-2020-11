import React, { useState } from "react";
import "./CompInput";
import "./CompDisp";
import CompInput from "./CompInput";
import CompDisp from "./CompDisp";

function CompBody(props) {
  const [number, setNumber] = useState(3);

  return (
    <div>
      <CompInput setNumber={setNumber} />
      <CompDisp number={number} />
    </div>
  );
}

export default CompBody;
