import Link from "next/link";
import Image from "next/image";

function LogoNavbar() {
  return (
    <div className="logo--container">
      <Link href="/">
        <Image
          src="/images/full_logo.svg"
          alt="EasyAid logo"
          title="EasyAid"
          width={400}
          height={30}
          style={{ objectFit: "contain" }}
          className="logo--slika"
        />
      </Link>
    </div>
  );
}

export default LogoNavbar;
