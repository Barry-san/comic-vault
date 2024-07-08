"use client";

import Image from "next/image";
import Link from "next/link";
import Cart from "../cart/Cart";
import { useState } from "react";
import { useCartContext } from "@/app/context/cartContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { quantity } = useCartContext();
  return (
    <header
      className={
        "w-full sticky top-0 h-fit  items-center justify-between p-4 flex border-b bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-10 backdrop-blur-md z-10"
      }
    >
      <Link href={"/"}>
        <div className="flex flex-col text-center uppercase font-body  font-semibold tracking-wider">
          <span className="text-[#C43421]">Comic</span>
          <span className="text-black dark:text-white">Vault</span>
        </div>
      </Link>
      <div className="">
        <button className="" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Cart</span>
          <Image
            src="/cart.svg"
            alt="cart"
            className=" dark:invert h-8  "
            width={24}
            height={24}
          />
        </button>
        {quantity > 0 ? quantity : null}
      </div>
      <Cart isOpen={isOpen} />
    </header>
  );
}
