import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

function writeUserData(userId, name, email) {
  const refrence = ref(db, "/" + userId);
  set(refrence, {
    username: name,
    email: email,
  });
}

function ImportingFirebase() {
  //writeUserData("test1", "Tester Marko", "test1@email.com");
  return;
}

/*
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection("todos").getDocs();
const todosCol = collection(db, "todos");
const snapshot = await getDocs(todosCol);
*/
// Detect asuth state
/*
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user!");
  }
});*/

export default ImportingFirebase;
