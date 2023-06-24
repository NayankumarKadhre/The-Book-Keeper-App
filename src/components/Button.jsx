import React from "react";

function Button(props) {
  const buttonClassName = "main-button " + props.className;

  return (
    <button name={props.name} type={props.type} className={buttonClassName}>
      {props.hasIcon && <i className="fas fa-search button-icon"></i>}
      {props.text}
    </button>
  );
}

export default Button;
