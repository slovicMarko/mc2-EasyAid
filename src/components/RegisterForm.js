import React from "react";
import Link from "next/link";

// REGISTER

const registerForm = () => {
  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <div className="app-name">EasyAid</div>
      <form className="form">
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            type="text"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            type="text"
            name="text"
            placeholder="username"
          />
        </div>
        <div className="form-field">
          <input
            className="input input--password"
            id="formInput#passwprd"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <div className="form-field">
          <button type="submit" className="login-btn">
            Register
          </button>
        </div>
      </form>
      <div className="log-reg-switch" id="switch">
        Već imaš račun?&nbsp;
        <Link className="switch" href="/login">
          Prijavi se!
        </Link>
      </div>
    </div>
  );
};

export default registerForm;
