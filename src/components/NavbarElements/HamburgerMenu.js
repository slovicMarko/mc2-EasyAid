import AuthNavbar from "@/components/NavbarElements/AuthNavbar";
import NavigationNavbar from "@/components/NavbarElements/NavigationNavbar";

export function HamburgerMenu({ onClick }) {
  return (
    <>
      <div className="hamburger-menu">
        <NavigationNavbar onClick={onClick} />
        <AuthNavbar onClick={onClick} />
      </div>
    </>
  );
}
