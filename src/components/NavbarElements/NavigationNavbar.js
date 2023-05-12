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
      <Link className="btn--nav" href="/">
        Početna
      </Link>
      <Link className="btn--nav" href="/feed">
        Aktivne akcije
      </Link>
      {user ? (
        <>
          <Link className="btn--nav" href="/activeEvents">
            Prijavljene akcije
          </Link>
          <Link className="btn--nav" href="/organiser">
            Moje akcije
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default NavigationNavbar;
