import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import registerForm from "./register_form";

function RegisterScreen() {
  return <div className="loginForm">{registerForm()}</div>;
}

export default RegisterScreen;
