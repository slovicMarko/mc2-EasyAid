"use client";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/FirebaseConfig";
import { fetchUser } from "./fetchUser";
import { useState } from "react";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchEvents(data) {
  try {
    const condition = query(
      collection(db, data.collection),
      where(data.docField, "==", data.docValue)
    );
    const querySnapshot = await getDocs(condition);
    const promises = [];
    querySnapshot.forEach(doc => {
      promises.push(fetchData(doc));
    });
    const events = await Promise.all(promises);
    return events;
  } catch (error) {
    console.log("Error getting documents:", error);
  }
}

async function fetchData(doc) {
  const user = (
    await fetchUser({
      collection: "users",
      docField: "userID",
      docValue: doc.data().ownerID,
    })
  )[0];
  return [doc.data(), user];
}
