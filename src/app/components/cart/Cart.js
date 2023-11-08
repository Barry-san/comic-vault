"use client";
import { useCartContext } from "@/app/context/cartContext";
export default function Cart({ navRef }) {
  const { cart, decreaseItem, increaseItem } = useCartContext();

  return (
    <div
      className="h-screen w-full md:w-1/2 fixed right-0 top-0  bg-[#6C1D12] transition-transform translate-x-full p-4 
      overflow-y-scroll "
      ref={navRef}
      aria-expanded={"false"}
    >
      {!cart.length ? (
        <p>No items in Cart</p>
      ) : (
        <>
          <div className="w-full p-4 grid grid-cols-1 justify-between gap-4 ">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border p-2">
                <img
                  src={item.url}
                  alt=""
                  className="aspect-square object-contain w-1/2"
                />
                <div className="flex justify-between flex-col">
                  <div className="flex gap-4 justify-between">
                    <p className="uppercase underline">{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex justify-between p-2 ">
                    <button onClick={() => increaseItem(item)}>+</button>
                    <div>{item.quantity}</div>
                    <button onClick={() => decreaseItem(item)}>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full border p-2 bg-black">
            Proceed to checkout
          </button>
        </>
      )}
    </div>
  );
}
