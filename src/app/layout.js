"use client";

import "./globals.css";
import "../components/cssFiles/navBar.css";

import "../components/FirebaseApp.js";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "EasyAid",
  description: "Aplikacija koja spaja volontere i organizatore",
};

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <div className="router-position">
          <div className="App">
            <div className="navbar">
              <div id="MainDiv">
                <div className="router-position">
                  <div className="App">
                    <div className="navbar">
                      <Link className="link navBtn" href="/">
                        HOME
                      </Link>
                      <Link className="link navBtn" href="/login">
                        LOGIN
                      </Link>
                      <Link className="link navBtn" href="/feed">
                        FEED
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
