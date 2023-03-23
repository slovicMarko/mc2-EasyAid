import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import loginForm from "./login_form";

function LoginScreen() {
  return <div className="loginForm">{loginForm()}</div>;
}

export default LoginScreen;
