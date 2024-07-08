import Products from "./products/products";
import Hero from "./components/hero/hero";
export default function Home() {
  return (
    <div className=" bg-white text-black dark:bg-black min-h-screen dark:text-white grid">
      <Hero />
      <Products />
    </div>
  );
}
