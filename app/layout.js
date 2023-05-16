import Modal from "./components/Modal";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "Golf Tracker",
  description: "Application to track golf scores for you and your friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Modal />
        <Nav />
        {children}
      </body>
    </html>
  );
}
