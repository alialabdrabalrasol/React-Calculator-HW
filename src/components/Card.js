import React from "react";
import Calculator from "./Calculator";

const Card = () => {
  return (
    <div className="card glow-on-hover">
      <div className="card-body">
        <Calculator />
      </div>
    </div>
  );
};

export default Card;
