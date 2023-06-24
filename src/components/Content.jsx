import React from "react";
import Input from "./Input";
import Button from "./Button";
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
        <div className="instruction-div">
          <div className="instruction">
            <p>
              Search Books and set their “status” to add them to your library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
