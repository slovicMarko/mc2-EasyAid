import React from "react";
import loginForm from "../../../components/LoginForm";

import Login from "../../../../firebase/SignInUser";

import "./login.css";

function LoginPage() {
  return <div className="loginForm">
    {loginForm()}
    < Login />
    </div>;
}

export default LoginPage;
