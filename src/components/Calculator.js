import React from "react";
import { useState } from "react";
const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState("");
  const onChangeNum1 = (e) => {
    setNum1(Number(e.target.value));
  };
  const onChangeNum2 = (e) => {
    setNum2(Number(e.target.value));
  };
  const add = () => {
    setResult(num1 + num2);
  };
  const subtract = () => {
    setResult(num1 - num2);
  };
  const multiply = () => {
    setResult(num1 * num2);
  };
  const divide = () => {
    setResult(num1 / num2);
  };
  const remainder = () => {
    setResult(num1 % num2);
  };
  console.log(result);

  return (
    <div className="container">
      <h3>Calculator</h3>
      <div className="row mb-2">
        <div className="col-md-6">
          <input onChange={onChangeNum1} value={num1}></input>
        </div>
        <div className="col-md-6">
          <input onChange={onChangeNum2} value={num2}></input>
        </div>
      </div>

      <div className="row  mb-2">
        <div className="col">
          <button className="glow-on-hover operation" onClick={add}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="col">
          <button className="glow-on-hover operation" onClick={subtract}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div className="col">
          <button className="glow-on-hover operation" onClick={multiply}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="col">
          <button className="glow-on-hover operation" onClick={divide}>
            <i className="fas fa-divide"></i>
          </button>
        </div>
        <div className="col">
          <button className="glow-on-hover operation" onClick={remainder}>
            <i className="fas fa-percentage"></i>
          </button>
        </div>
      </div>
      <div className="row p-3">
        <input disabled value={result} width={"100%"}></input>
      </div>
    </div>
  );
};

export default Calculator;
