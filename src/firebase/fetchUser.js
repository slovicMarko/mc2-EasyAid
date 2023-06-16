import {
  getFirestore,
  doc,
  query,
  where,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchUser(data) {

  

  const user = new Array();
  try {
    const q = query(
      collection(db, data.collection),
      where(data.docField, "==", data.docValue)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user.push(doc.data());
      localStorage.setItem("userDocID", doc.id);
    });
  } catch (error) {
    console.log("Error getting documents:", error);
  }

  return user[0];
}
