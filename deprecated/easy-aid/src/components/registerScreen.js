import React from "react";
import registerForm from "./register_form";

function RegisterScreen() {
  if (document.body.style.overflow != "hidden") {
    document.body.style.overflow = "hidden";
  }

  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;
