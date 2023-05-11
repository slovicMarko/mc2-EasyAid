"use router";

import React from "react";
import { useRouter } from "next/navigation";

import { getAuth } from "firebase/auth";
import { push } from "firebase/database";

function SignOut(isInNavbar) {
  const auth = getAuth();
  const router = useRouter();
  const handleSignOut = (e) => {
    auth
      .signOut()
      .then((auth) => {
        console.log("Signed Out");
        router.push("/");
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
