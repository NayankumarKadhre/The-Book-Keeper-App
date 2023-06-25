import React from "react";
import Bookcard from "./Bookcard";

function LibrarySection(props) {
  return (
    <div className="library-section">
      <div className="library-section-heading">
        <p>{props.heading}</p>
        <div className="section-divider"></div>
      </div>

      <div className="library-section-grid">
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </div>
    </div>
  );
}

export default LibrarySection;
