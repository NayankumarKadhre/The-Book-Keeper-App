import React from "react";

function Info(props) {
  return (
    <p className={props.className}>
      <strong>{props.title}</strong>
      {props.info}
    </p>
  );
}

export default Info;
