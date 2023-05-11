"use client";

import "./globals.css";

import Navbar from "./Navbar";

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
        {children}
      </body>
    </html>
  );
}
