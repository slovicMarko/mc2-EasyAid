import React from "react";
import { Link } from "react-router-dom";


// LOGIN

const loginForm = () => {
  return (
    <div className="formContainer">
      <div className="appName">EasyAid</div>
      <form className="form">
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
            Login
          </button>
        </div>
      </form>
      <div className="logRegSwitch" id="switch">
        Nemas račun?
        <Link className="switch" to="/registerForm">
          {" "}
          Registriraj se!
        </Link>
      </div>
    </div>
  );
};

export default loginForm;
