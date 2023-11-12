import "./globals.css";
import Navigation from "@/app/components/navigation/Navigation";
import { CartContextProvider } from "./context/cartContext";

import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Comic vault",
  description: "An e-commerce website to purchase marvel comics.",
  logo: "/public/hero.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black text-white"}>
        <CartContextProvider>
          <Toaster />
          <Navigation />

          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
