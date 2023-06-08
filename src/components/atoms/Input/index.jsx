import React from "react";
import "./Input.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-control">
      <div className="box-input">
        <p className="lebel">{label}</p>
        <input type="text" {...rest} className="input" />
      </div>
    </div>
  );
};

export default Input;
