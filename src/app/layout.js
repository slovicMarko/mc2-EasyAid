import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="router-position">
          <div className="App">
            <div className="navbar">TU UBACI NAVIGACIJU</div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
