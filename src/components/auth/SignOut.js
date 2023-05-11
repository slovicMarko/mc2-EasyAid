"use router";

import { useRouter } from "next/navigation";

import { getAuth } from "firebase/auth";

function SignOut(isInNavbar) {
  const auth = getAuth();
  const router = useRouter();
  const handleSignOut = (e) => {
    auth
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        console.log("Signed Out with error");
      });
  };

  let signOutClass = isInNavbar ? "sign-out-navbar" : "";

  return (
    <div title="Odjavi me" className={signOutClass} onClick={handleSignOut}>
      Odjavi me
    </div>
  );
}

export default SignOut;
