import React, { useState } from "react";

function Button(props) {
  const buttonClassName = "main-button " + props.className;

  return (
    <button
      onClick={props.onClick}
      name={props.name}
      type={props.type}
      className={buttonClassName}
    >
      {props.hasIcon && <i className="fas fa-search button-icon"></i>}
      {props.text}
    </button>
  );
}

export default Button;
