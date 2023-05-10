import React, { useEffect, useState } from "react";
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
      {user ? (
        <>
          <Link className="btn--nav" href="/">
            Naslovna strana
          </Link>
          <Link className="btn--nav" href="/feed">
            Feed
          </Link>
          <Link className="btn--nav" href="/activeEvents">
            Aktivne akcije
          </Link>
          <Link className="btn--nav" href="/organiser">
            Organizatori
          </Link>
        </>
      ) : (
        <>
          <Link className="btn--nav" href="/">
            Naslovna strana
          </Link>
          <Link className="btn--nav" href="/feed">
            Feed
          </Link>
        </>
      )}
    </div>
  );
}

export default NavigationNavbar;
