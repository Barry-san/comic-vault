export default function Hero() {
  return (
    <section className="hero flex flex-col justify-center w-full mb-4 bg-hero h-[90vh] md:p-6 bg-fixed bg-cover">
      <article className="md:w-1/2 p-4">
        <h2 className="lg:text-8xl md:text-7xl text-6xl font-bold text-white dark:text-black">
          Dive into the world of{" "}
          <span className="italic text-blue-400 font-serif">comics</span>.
        </h2>
      </article>
    </section>
  );
}
