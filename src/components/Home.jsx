import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
function Home() {
  return (
    <div className="container">
      <Sidebar />
      <div></div>
      <Content />
    </div>
  );
}

export default Home;
