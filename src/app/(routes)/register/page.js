import React from "react";
import registerForm from "../../../components/login/RegisterForm";

//import ".login.css";

function RegisterScreen() {
  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;