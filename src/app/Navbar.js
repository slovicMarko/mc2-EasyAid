import React from "react";
import Link from "next/link";
import Image from "next/image";

import "../components/cssFiles/navBar.scss";
import AuthNavbar from "@/components/NavbarElements/AuthNavbar";
import NavigationNavbar from "@/components/NavbarElements/NavigationNavbar";

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
        </div>
        <NavigationNavbar />
        <AuthNavbar />
      </div>
    </>
  );
}

export default Navbar;
