import AuthNavbar from "@/components/NavbarElements/AuthNavbar";
import NavigationNavbar from "@/components/NavbarElements/NavigationNavbar";
import LogoNavbar from "@/components/NavbarElements/LogoNavbar";

export function HamburgerMenu() {
  return (
    <>
      <div className="hamburger-menu">
        <NavigationNavbar />
        <AuthNavbar />
      </div>
    </>
  );
}
