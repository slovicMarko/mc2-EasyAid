import React from "react";
import Register from "../../../firebase/SignUpUser";
import "../prijava/login.scss";

function RegisterScreen() {
  return (
    <div className="loginForm">
      <Register />
    </div>
  );
}
export default RegisterScreen;
