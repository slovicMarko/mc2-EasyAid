import React from "react";
import loginForm from "../../../components/LoginForm";

import "./login.css";

function LoginPage() {
  return <div className="loginForm">{loginForm()}</div>;
}

export default LoginPage;
