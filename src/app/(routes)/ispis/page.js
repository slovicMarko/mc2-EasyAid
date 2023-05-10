"use client";

import React from "react";

import "./probna.scss";

import { useState } from "react";

import { getFirestore, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebase/FirebaseConfig";

import "../login/login.scss";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
class Akcija {
  constructor(_title, _description, _city, _active) {
    this.title = _title;
    this.description = _description;
    this.city = _city;
    this.active = _active;
  }
}

const AkcijaConverter = {
  toFirestore: (akcija) => {
    return {
      title: akcija.title,
      description: akcija.description,
      city: akcija.city,
      active: akcija.active,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Akcija(data.title, data.description, data.city, data.active);
  },
};
export default AkcijaConverter;
  */
