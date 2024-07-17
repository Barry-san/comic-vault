"use client";
import CartItem from "../components/cart/CartItem";
import { useCartContext } from "../context/cartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function CheckoutPage() {
  const { quantity, totalPrice, cart, increaseItem, decreaseItem } =
    useCartContext();
  return (
    <div className="flex w-full justify-around h-[90vh] p-4">
      <section className="hidden md:block w-full overflow-y-scroll">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            functions={{ increaseItem, decreaseItem }}
            item={item}
          />
        ))}
      </section>
      <section className="flex w-full flex-col items-center justify-evenly gap-4 p-4">
        <p>Quantity of goods purchased :</p>
        <p className="text-3xl">{quantity}</p>
        <p className="font-bold font-2xl">Total Cost : ${totalPrice}</p>
        <div className="-z-10 w-full"></div>
      </section>
    </div>
  );
}
