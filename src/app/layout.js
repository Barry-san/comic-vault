import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/navigation/Navigation";

export const metadata = {
  title: "Comic vault",
  description: "An e-commerce website to purchase marvel comics.",
  logo: "/public/hero.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black text-white"}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
