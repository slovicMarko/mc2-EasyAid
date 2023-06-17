import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/FirebaseConfig";
import { getStorage, ref } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storeage = getStorage(app);

export async function fetchUser(data) {
  const imageRef = ref(
    storeage,
    `users/${data.docValue}/profile_image/profile_picture`
  );

  const user = new Array();
  try {
    const condition = query(
      collection(db, data.collection),
      where(data.docField, "==", data.docValue)
    );
    const querySnapshot = await getDocs(condition);
    querySnapshot.forEach((doc) => {
      user.push(doc.data());
      localStorage.setItem("userDocID", doc.id);
    });

  } catch (error) {
    console.log("Error getting documents:", error);
  }

  return user;
}
