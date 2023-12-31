import React from "react";

function Input(props) {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className="input-style"
    />
  );
}

export default Input;
