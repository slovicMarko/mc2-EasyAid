import React from "react";
import Link from "next/link";
import Image from "next/image";

import "../components/cssFiles/navBar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar--logo--container">
          <Image
            //loader={sponzori}
            src="/images/fulllogo.svg"
            alt="EasyAid logo"
            title="EasyAid"
            fill="true"
            className="navbar--logo"
          />
        </div>
        <div className="navbar--navigation">
          <Link className="btn--nav" href="/">
            Naslovna strana
          </Link>
          <Link className="btn--nav" href="/feed">
            Feed
          </Link>
          <Link className="btn--nav" href="/">
            Aktivne akcije
          </Link>
          <Link className="btn--nav" href="/">
            Organizatori
          </Link>
        </div>
        <div className="navbar--auth">
          <Link className="btn--auth--login" href="/login">
            Prijavi se
          </Link>
          <Link className="btn--auth--reg" href="/register">
            Registriraj se
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
