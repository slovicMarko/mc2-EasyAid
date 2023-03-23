import React from "react";
import formEvent from "./form";

function LoginScreen() {
  return (
   <div className="loginForm">
      {formEvent()}
   </div>   
  );
};

export default LoginScreen;
