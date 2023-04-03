import React from "react";
import registerForm from "./RegisterForm";

import "./loginPage.css";

function RegisterScreen() {
  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;
