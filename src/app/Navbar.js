import React from "react";
import Link from "next/link";

import { Logo1Full } from "src/components/logo1.js";
import "../components/cssFiles/navBar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Logo1Full className="logoFullUpper"/>
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
