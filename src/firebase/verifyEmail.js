"use client";
"use router";

import { getAuth, sendEmailVerification } from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

function VerifyEmail() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  sendEmailVerification(user);
}

export default VerifyEmail;
