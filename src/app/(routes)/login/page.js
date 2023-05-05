import React from "react";

import Login from "../../../../firebase/SignInUser";

import "./login.scss";

function LoginPage() {
  return (
    <div className="loginForm">
      {/*loginForm()*/}
      <Login />
    </div>
  );
}

export default LoginPage;
