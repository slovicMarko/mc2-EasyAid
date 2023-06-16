import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchEvents(data) {
  const events = new Array();
  try {
    const condition = query(
      collection(db, data.collection),
      where(data.docField, "==", data.docValue)
    );
    const querySnapshot = await getDocs(condition);
    querySnapshot.forEach((doc) => {
      events.push(doc.data());
    });
  } catch (error) {
    console.log("Error getting documents:", error);
  }

  return events;
}
