import "./globals.css";
import "@/components/cssFiles/navBar.css";

import "../components/FirebaseApp.js";


import Link from 'next/link';
import HomePage from "@/components/HomePage/HomePage";
import LoginPage from "@/components/LoginPage/LoginPage";
import MainFeed from "@/components/MainFeed/MainFeed";

export const metadata = {
  title: "EasyAid",
  description: "Aplikacija koja spaja volontere i organizatore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="router-position">
          <div className="App">
            <div className="navbar">
            <>
      <div id="MainDiv">
        <div className="router-position">
            <div className="App">
              <div className="navbar">
                {/*<Logo1 />*/}
                <Link className="link navBtn" href="/HomePage">
                  HOME
                </Link>

                <Link className="link navBtn" href="/LoginPage">
                  LOGIN
                  {/*<LoginButton />*/}
                </Link>

                <Link className="link navBtn" href="/MainFeed">
                  FEED
                </Link>
              </div>
            </div>
        </div>
      </div>
    </>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
