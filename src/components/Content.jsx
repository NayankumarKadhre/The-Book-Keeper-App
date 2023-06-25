import React from "react";
import Input from "./Input";
import Button from "./Button";
import Instruction from "./Instruction";
import Library from "./Library";
import Favorites from "./Favorites";
import Description from "./Description";
import Contact from "./Contact";

function Content() {
  return (
    <div className="content">
      <div className="search-section">
        <div>
          <Input
            type="text"
            placeholder="Search book/Author/ISBN"
            name="search-bar"
          />
          <Button
            name="search"
            type="submit"
            hasIcon={true}
            className="custom-button"
          />
        </div>
      </div>

      <div className="main-section">
        <Description />
      </div>
    </div>
  );
}

export default Content;
