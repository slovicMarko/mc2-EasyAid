import React from "react";
import Link from "next/link";

const loginForm = () => {
  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <div className="app-name">EasyAid</div>

  
      <div className="log-reg-switch" id="switch">
        Nemas račun?&nbsp;
        <Link className="switch" href="/register">
          Registriraj se!
        </Link>
      </div>
    </div>
  );
};

export default loginForm;
