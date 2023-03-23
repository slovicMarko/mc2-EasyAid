import React from "react";
import loginForm from "./form";

function LoginScreen() {
  return (
   <div className="loginForm">
      {loginForm()}
   </div>   
  );
};

export default LoginScreen;
