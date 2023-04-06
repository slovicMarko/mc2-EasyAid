import { useState } from "react";
import auth from "../../firebase/clientApp";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={singIn}>Sign in</button>
    </div>
  );
};

{
  /*

import React from "react";
import firebase from "../../firebase/clientApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateEmail,
} from "firebase/auth";

const Authentification = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user !== null) {
    console.log(user);
    updateEmail(user, "marko.sloic@mail.hr");
  } else {
    console.log("nema korisnika");
  }
};

export default Authentification;
*/
}
