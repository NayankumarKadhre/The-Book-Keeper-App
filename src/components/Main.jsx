import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Outlet key="main" />
    </div>
  );
}
export default Main;
