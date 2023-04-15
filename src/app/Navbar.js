import React from "react";
import Link from "next/link";
import Image from "next/image";

import "../components/cssFiles/navBar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo--container">
          <Link href="/">
            <Image
              src="/images/full_logo.svg"
              alt="EasyAid logo"
              title="EasyAid"
              height={"30"}
              width={"400"}
              className="logo--slika"
            />
          </Link>

          {/*
          <img src="images/logo_slika.svg" alt="logo" className="logo--slika"/>
          <img src="images/logo_text.svg" alt="logo text" className="logo--slika"/>
          
          <Image
            src="/images/logo_text.svg"
            alt="EasyAid logo"
            title="EasyAid"
            height={"30"}
            width={"30"}
            className="logo--slika"
          />
        */}
        </div>
        <div className="navbar--navigation">
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
