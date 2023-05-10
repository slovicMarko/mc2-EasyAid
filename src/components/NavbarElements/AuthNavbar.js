import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import SignOut from "../auth/SignOut";

function AuthNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <div className="navbar--auth">
      {user ? (
        <>
          <Link className="btn--auth--login" href="/profile/marko">
            Profil
          </Link>
          <SignOut isInNavbar/>
        </>
      ) : (
        <>
          <Link className="btn--auth--login" href="/login">
            Prijavi se
          </Link>
          <Link className="btn--auth--reg" href="/register">
            Registriraj se
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthNavbar;