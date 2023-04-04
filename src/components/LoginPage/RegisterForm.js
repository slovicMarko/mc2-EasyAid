import React from "react";
//import { Link } from "react-router-dom";
import logo from "/images/logo.svg";

// REGISTER

const registerForm = () => {
  return (
    <div className="formContainer">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <div className="appName">EasyAid</div>
      <form className="form">
        <div className="formField">
          <input
            className="input input--text"
            id="formInput#text"
            type="text"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="formField">
          <input
            className="input input--text"
            id="formInput#text"
            type="text"
            name="text"
            placeholder="username"
          />
        </div>
        <div className="formField">
          <input
            className="input input--password"
            id="formInput#passwprd"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <div className="formField">
          <button type="submit" className="loginBtn">
            Register
          </button>
        </div>
      </form>
      <div className="logRegSwitch" id="switch">
        Već imaš račun?&nbsp
        <Link className="switch" href="/loginScreen">
          Prijavi se!
        </Link>
      </div>
    </div>
  );
};

export default registerForm;
