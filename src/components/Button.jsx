import React from "react";

function Button(props) {
  return (
    <button name={props.name} type={props.type} className="main-button">
      {props.text}
    </button>
  );
}

export default Button;
