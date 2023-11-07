export default function Cart({ navRef }) {
  return (
    <div
      className="h-screen w-full md:w-2/5 fixed right-0 top-0 bg-[#6C1D12] transition-transform translate-x-full p-4
       "
      ref={navRef}
      aria-expanded={"false"}
    ></div>
  );
}
