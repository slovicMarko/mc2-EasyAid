"use client";

import "./globals.css";

import Navbar from "@/components/NavbarElements/Navbar";

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
