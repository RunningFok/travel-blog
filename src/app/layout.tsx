import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Subsecription from "./shared/Subscription";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "chewout ",
  description: "Slow yourself down inCheung Chau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Subsecription />
        <Footer />
      </body>
    </html>
  );
}
