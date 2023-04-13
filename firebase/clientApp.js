import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  console.log("Prijavljen");
} else {
  console.log("Nema korisnika");
}

/*
const db = getFirestore();
db.collection("todos").getDocs();
const todosCol = collection(db, "todos");
const snapshot = await getDocs(todosCol);

// Detect asuth state

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user!");
  }
});
*/
