import React from "react";
import LibrarySection from "./LibrarySection";

function Library(props) {
  return (
    <div className="library">
      <LibrarySection heading="Reading" />
      <LibrarySection heading="Will Read" />
      <LibrarySection heading="Have Read" />
    </div>
  );
}

export default Library;
