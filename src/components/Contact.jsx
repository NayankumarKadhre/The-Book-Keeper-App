import React from "react";
import Input from "./Input";
import Button from "./Button";

function Contact() {
  return (
    <div className="login-form-div contact-form">
      <div className="login-heading-form">
        <h1>Contact Us</h1>
        <form className="form" action="/contact" method="POST">
          <Input type="email" placeholder="Email" name="contact-email" />
          <textarea
            className="input-style textarea-style"
            name="message"
            placeholder="Message"
          ></textarea>
          <Button type="submit" text="Send" name="contact" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
