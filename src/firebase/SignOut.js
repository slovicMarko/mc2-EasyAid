"use router";

import { useRouter } from "next/navigation";

import { getAuth } from "firebase/auth";

function SignOut(isInNavbar) {
  const auth = getAuth();
  const router = useRouter();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("userDocID");
        router.push("/");
      })
      .catch(() => {
        console.log("Signed Out with error");
      });
  };

  let signOutClass = isInNavbar ? "action-btn green-btn" : "";

  return (
    <div title="Odjavi me" className={signOutClass} onClick={handleSignOut}>
      Odjavi me
    </div>
  );
}

export default SignOut;
