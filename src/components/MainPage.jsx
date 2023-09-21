import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const MainPage = () => (
  <>
    <div className="main-div">
      <div className="main-heading-div">
        <p className="main-heading">
          Welcome to <span>The Book Keeper</span>
        </p>
        <p>Your Personal Library, Perfectly Organized</p>
      </div>

      <div className="button-div">
        <NavLink to="/login">
          <Button text="Log in" name="main-login" />
        </NavLink>
        <NavLink to="/signup">
          <Button text="Sign Up" name="main-signup" />
        </NavLink>
      </div>
    </div>
  </>
);

export default MainPage;
