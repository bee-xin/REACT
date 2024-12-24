import React, { useState } from "react";
function Awe() {
  const[state, setState]=useState("three");
  

  function func() {
    setState("hggfdf");
    }

  return (
    <div>
      {state}
      <button onClick={func}>Clickme</button>
    </div>
  );
}

export default Awe;
