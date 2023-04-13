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

export default ImportingFirebase;
