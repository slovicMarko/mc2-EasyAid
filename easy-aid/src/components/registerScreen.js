import React from "react";
import registerForm from "./register_form";

function RegisterScreen() {
  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;
