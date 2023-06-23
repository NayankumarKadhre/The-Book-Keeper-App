import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <div className="login-form-div">
      <div className="login-heading-form">
        <h1>Login</h1>
        <form className="form" action="/login" method="POST">
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Button type="submit" text="Login" name="login" />
        </form>
      </div>

      <div className="bottom-text">
        <p>
          Not registered?{" "}
          <a href="#" /*links to sign up component*/>Create an Account.</a>
        </p>
        <p>
          Lost your password?{" "}
          <a href="#" /*handle recover password*/>Click here </a>to recover.
        </p>
      </div>
    </div>
  );
}

export default Login;
