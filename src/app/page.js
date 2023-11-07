"use client";

import Products from "./products/products";
import Hero from "./components/hero/hero";
import { cartContext } from "./context/cartContext";
export default function Home() {
  return (
    <cartContext.Provider value={[]}>
      <div className="bg-black min-h-screen text-white grid">
        <Hero />
        <Products />
      </div>
    </cartContext.Provider>
  );
}
