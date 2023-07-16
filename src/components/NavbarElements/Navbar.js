import AuthNavbar from "@/components/NavbarElements/AuthNavbar";
import NavigationNavbar from "@/components/NavbarElements/NavigationNavbar";
import LogoNavbar from "@/components/NavbarElements/LogoNavbar";
import { HamburgerMenu } from "@/components/NavbarElements/HamburgerMenu";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [menuOn, SetMenu] = useState(false);
  function MenuSet() {
    if (menuOn === true) SetMenu(false);
    else SetMenu(true);
  }

  return (
    <>
      <div className="navbar">
        <LogoNavbar />
        <NavigationNavbar />
        <AuthNavbar />
      </div>
      <div className="navbar-screen">
        <button className="menu-btn" onClick={() => MenuSet()}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      {menuOn ? <HamburgerMenu /> : null}
    </>
  );
}

export default Navbar;
