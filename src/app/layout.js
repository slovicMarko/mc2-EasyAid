"use client";

import "./globals.css";

//import "../components/FirebaseApp.js";

import Navbar from "./Navbar";
import { Auth } from "./auth";

export const metadata = {
  title: "EasyAid",
  description: "Aplikacija koja spaja volontere i organizatore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>EasyAid</title>
      </head>
      <body>
        <Navbar />
        <Auth />
        {/*children*/}
      </body>
    </html>
  );
}
