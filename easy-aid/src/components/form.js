import React from "react";

const loginForm = () => {
  return (
    <div className="formContainer">
      <form class="form">
        <div class="formField">
          <input
            class="input input--text"
            id="formInput#text"
            type="text"
            name="text"
            placeholder="username"
          />
        </div>
        <div class="formField">
          <input
            class="input input--password"
            id="formInput#passwprd"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <div className="formField">
            <div className="loginBtn">
                Login
            </div>
        </div>
      </form>
    </div>
  );
};

export default loginForm;
