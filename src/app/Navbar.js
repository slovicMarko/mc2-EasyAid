import React from "react";
import Link from "next/link";

import "../components/cssFiles/navBar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="link navBtn" href="/">
          HOME
        </Link>
        <Link className="link navBtn" href="/login">
          LOGIN
        </Link>
        <Link className="link navBtn" href="/feed">
          FEED
        </Link>
      </div>
    </>
  );
}

export default Navbar;
