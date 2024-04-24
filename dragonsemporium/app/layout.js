import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/components/Navbar";
import Footer from "@/app/ui/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragon's Emporium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
