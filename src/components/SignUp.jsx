import React from "react";
import Input from "./Input";
import Button from "./Button";

function SignUp() {
  return (
    <div className="login-form-div">
      <div className="login-heading-form">
        <h1>Sign Up</h1>
        <form className="form" action="/signup" method="POST">
          <Input type="text" placeholder="Username" name="username" />
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Button type="submit" text="Sign Up" name="signup" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
