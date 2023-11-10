"use client";
import { useCartContext } from "@/app/context/cartContext";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem";
import toggle, { close } from "../navigation/toggle";

export default function Cart({ navRef }) {
  const { cart, decreaseItem, increaseItem } = useCartContext();

  return (
    <div
      className="h-screen w-full md:w-1/2 fixed right-0 top-0  bg-[#6C1D12] transition-transform translate-x-full p-4 
      overflow-y-scroll "
      ref={navRef}
      aria-expanded={"false"}
      onBlure={() => close(navRef)}
    >
      <button onClick={() => close(navRef)} className="">
        <span className="sr-only">close</span>
        <Image
          src={"/close.svg"}
          height={24}
          width={24}
          alt="close-button"
          className=" invert"
        ></Image>
      </button>
      {!cart.length ? (
        <p>No items in Cart</p>
      ) : (
        <>
          <div className="w-full p-4 grid grid-cols-1 justify-between gap-4 ">
            {cart.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                functions={{ decreaseItem, increaseItem }}
              />
            ))}
          </div>
          <Link href={"/checkout"}>
            <button className="w-full border p-2 bg-black">
              Proceed to checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
