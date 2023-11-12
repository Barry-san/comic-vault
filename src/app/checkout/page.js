"use client";
import CartItem from "../components/cart/CartItem";
import { useCartContext } from "../context/cartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function CheckoutPage() {
  const { quantity, totalPrice, cart, increaseItem, decreaseItem } =
    useCartContext();
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AdtI5-ZecA5kSbGRpTE4z3XuOHsYBh8zu8siQ-ggdl2yzTO7OtNr58zdhNrUkLajqMn6fMBz42SE1o-K",
      }}
    >
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
          <div className="-z-10 w-full">
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, action) => {
                action.order.create({
                  purchase_units: [
                    {
                      description: "",
                      amount: { value: totalPrice.toString() },
                    },
                  ],
                });
              }}
              onApprove={async () => {}}
              className="w-full"
            ></PayPalButtons>
          </div>
        </section>
      </div>
    </PayPalScriptProvider>
  );
}
