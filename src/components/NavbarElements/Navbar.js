import AuthNavbar from "@/components/NavbarElements/AuthNavbar";
import NavigationNavbar from "@/components/NavbarElements/NavigationNavbar";
import LogoNavbar from "@/components/NavbarElements/LogoNavbar";
import "../cssFiles/navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <LogoNavbar />
        <NavigationNavbar />
        <AuthNavbar />
      </div>
    </>
  );
}

export default Navbar;
