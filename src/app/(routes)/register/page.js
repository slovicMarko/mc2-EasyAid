import React from "react";
import registerForm from "../../../components/RegisterForm";

import "../login/login.scss";

function RegisterScreen() {
  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;
