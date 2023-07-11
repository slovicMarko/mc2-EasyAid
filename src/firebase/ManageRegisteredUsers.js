"use client";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function AddUserToEvent() {
  try {
    const docRef = doc(db, "actions", localStorage.getItem("ActionDocID"));
    await updateDoc(docRef, {
      registered: arrayUnion(localStorage.getItem("user")),
    });
    return;
  } catch (error) {
    console.log("Error getting documents:", error);
  }
}

export async function RemoveUserFromEvent() {
  try {
    const docRef = doc(db, "actions", localStorage.getItem("ActionDocID"));
    await updateDoc(docRef, {
      registered: arrayRemove(localStorage.getItem("user")),
    });
    return;
  } catch (error) {
    console.log("Error getting documents:", error);
  }
}
