import React from "react";
import registerForm from "../../../components/RegisterForm";

import "../login/login.css";

function RegisterScreen() {
  return <div className="login-form">{registerForm()}</div>;
}

export default RegisterScreen;
