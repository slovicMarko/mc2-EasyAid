import React from "react";
import loginForm from "./login_form";
import registerForm from "./register_form";




function LoginScreen() {
   
   let check = "login";
   
  if (check === "login") {
     return <div className="loginForm">
      {loginForm()}
      </div>;
  } else if (check === "register") {
     return <div className="loginForm">
      {registerForm()}
      </div>;
  }
}

export default LoginScreen;
