import { useEffect, useState } from "react";
import Link from "next/link";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function NavigationNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <div className="navbar--navigation">
      <Link className={"btn--nav"} href="/">
        Početna
      </Link>
      <Link className={"btn--nav"} href="/aktivne_akcije">
        Aktivne akcije
      </Link>
      {user ? (
        user.emailVerified ? (
          <>
            <Link className={"btn--nav"} href="/prijavljene_akcije">
              Prijavljene akcije
            </Link>
            <Link className={"btn--nav"} href="/moje_akcije">
              Moje akcije
            </Link>
          </>
        ) : null
      ) : null}
    </div>
  );
}

export default NavigationNavbar;
