import "./globals.css";

export const metadata = {
  title: "Golf Tracker",
  description: "Application to trac golf scores for you and your friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
