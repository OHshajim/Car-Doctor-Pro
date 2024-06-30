import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Shared/Nav";
import HomePage from "@/Components/HomePage/page";
import Footer from "@/Components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car-Doctor-Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
