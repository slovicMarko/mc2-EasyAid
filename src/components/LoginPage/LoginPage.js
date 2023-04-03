import React from "react";
import loginForm from "./LoginForm";

import "./loginPage.css";

function LoginScreen() {
  return <div className="loginForm">{loginForm()}</div>;
}

export default LoginScreen;
