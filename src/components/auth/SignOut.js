import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAuth } from "firebase/auth";

function SignOut(isInNavbar) {
  const auth = getAuth();
  const handleSignOut = (e) => {
    auth
      .signOut()
      .then((auth) => {
        // Signed in
        console.log("Signed Out");
        // ...
      })
      .catch((err) => {
        console.log("Signed Out with error");
      });
  };

  let signOutClass = isInNavbar ? "sign-out-navbar" : "";

  return (
    <div title="Odjavi me" className={signOutClass} onClick={handleSignOut}>
      Odjavi me
    </div>
  );
}

export default SignOut;
