"use client";

import Image from "next/image";
import Link from "next/link";
import Cart from "../cart/Cart";
import { createRef } from "react";
import toggle, { close, open } from "./toggle";
import { useCartContext } from "@/app/context/cartContext";

export default function Navigation() {
  const { quantity } = useCartContext();
  const ref = createRef(null);
  return (
    <header className="w-full sticky top-0 h-fit flex items-center justify-between p-4 bg-black">
      <Link href={"/"}>
        <div className="flex flex-col text-center uppercase font-body text-xl font-semibold mix">
          <span className="text-[#C43421]">Comic</span>
          <span>Vault</span>
        </div>
      </Link>
      <div className="">
        <button onClick={() => open(ref)} className="">
          <span className="sr-only">Cart</span>
          <Image
            src="/cart.svg"
            alt="cart"
            className=" invert h-8  "
            width={24}
            height={24}
          />
        </button>
        {quantity > 0 ? quantity : null}
      </div>
      <Cart navRef={ref} />
    </header>
  );
}
