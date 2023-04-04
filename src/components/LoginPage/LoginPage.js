import React from "react";
import loginForm from "./LoginForm";

import "./loginPage.css";

function LoginPage() {
  return <div className="loginForm">{loginForm()}</div>;
}

export default LoginPage;
