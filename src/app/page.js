import Products from "./products/products";
import Hero from "./components/hero/hero";
export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white grid">
      <Hero />
      <Products />
    </div>
  );
}
