import React from "react";
import Button from "./Button";

function Main() {
  return (
    <div className="main-div">
      <div className="main-heading-div">
        <p className="main-heading">
          Welcome to <span>The Book Keeper</span>
        </p>
        <p>Your Personal Library, Perfectly Organized</p>
      </div>

      <div className="button-div">
        <Button text="Log in" name="main-login"></Button>
        <Button text="Sign Up" name="main-signup"></Button>
      </div>
    </div>
  );
}

export default Main;
