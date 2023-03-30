import React from "react";
import loginForm from "./login_form";

function LoginScreen() {
  
  if (document.body.style.overflow != "hidden") {
    document.body.style.overflow = "hidden"
  }
  return <div className="loginForm">{loginForm()}</div>;
}

export default LoginScreen;
