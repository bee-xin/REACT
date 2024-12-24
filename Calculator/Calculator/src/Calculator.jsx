import { useState } from "react";
import "./Calculator.css"

function Calculator() {
    const [state, setState]= useState("");
    const [num1, setNum1]= useState("");
    const [num2, setNum2]= useState("");
    function add(){
      const result= num1 + num2;
      setState(result);
  }
  function sub(){
      const result= num1- num2;
      setState(result);
  }
  function mul(){
      const result= num1* num2;
      setState(result);
  }
  function division(){
      const result= num1 / num2;
      setState(result);
  }
  function firstNumber(a){
      const firstnum= parseInt(a.target.value);
      setNum1(firstnum);
  }
  function secondNumber(a){
      const secondnum= parseInt(a.target.value);
      setNum2(secondnum);
  }
  function reset() {
      setState(" ");
      setNum1(" ");
      setNum2(" ");
  }
  return (
    <>
    <div className="flex">
    <input type="number" value={num1} onChange={firstNumber}/>
    <button onClick={add}>ADD</button>
    <button onClick={sub}>SUB</button>
    <button onClick={mul}>MUL</button>
    <input type="number" value={num2} onChange={secondNumber}/>
    <button onClick={division}>Div</button>
    <button onClick={reset}>AutoClear</button>
    <div className="result">RESULT: {state}</div>
    </div>
    </>
  )
}
export default Calculator