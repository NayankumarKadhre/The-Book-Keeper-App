import React from "react";
import bookCover from "./bookcover.jpg";

function Bookcard() {
  return (
    <div className="book-card">
      <img src={bookCover} alt="Book-Cover" />
      <div className="book-details">
        <p>Book Name</p>
        <p>
          <em>Author Name</em>
        </p>
      </div>
    </div>
  );
}

export default Bookcard;
