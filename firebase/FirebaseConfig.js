import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL:
    "https://mc2-easyaid-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID",
  measurementId: "FIREBASE_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

export default initializeApp;
