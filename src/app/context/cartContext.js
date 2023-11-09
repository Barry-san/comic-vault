"use client";
import { createContext, useContext, useState, useMemo } from "react";

export const cartContext = createContext([]);

export function CartContextProvider({ children }) {
  const defaultItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [cart, setCart] = useState(defaultItems);
  const [quantity, settQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    /*get cart items from localStorage if it is available. */
    localStorage.setItem("cart", JSON.stringify(cart));
    let price = 0;
    for (let item of cart) {
      price += item.price * item.quantity;
    }
    /*looping through the items in the cart object gotten from localStorage,
    set the price variable to the value of the total available price. */
    setTotalPrice(price.toFixed(2));

    let quantity = 0;
    for (let item of cart) {
      quantity += item.quantity;
    }

    /*looping through the items in the cart object gotten from localStorage,
    set the quantity variable to the value of the total available quantities. */
    settQuantity(quantity);
  }, [cart]);

  const checkCart = (item) => {
    if (!cart) return false;
    return cart.find((elem) => elem.id === item.id);
  };
  const increaseItem = (item) => {
    const updatedCart = cart.map((elem) => {
      if (item.id === elem.id) {
        elem.quantity += 1;
        settQuantity((prev) => prev + 1);
        return elem;
      } else {
        return elem;
      }
    });
    setCart(updatedCart);
  };

  const decreaseItem = (item) => {
    const updatedCart = cart.map((elem) => {
      if (item.id === elem.id) {
        elem.quantity > 1 ? (elem.quantity -= 1) : elem.quantity;
        settQuantity((prev) => prev - 1);
        return elem;
      } else {
        return elem;
      }
    });
    setCart(updatedCart);
  };
  function addToCart(item) {
    if (checkCart(item)) {
      cart.forEach((elem) => {
        if (elem.id === item.id) increaseItem(item);
      });
    } else {
      setCart((prev) => [
        ...prev,
        {
          id: item.id,
          name: item.title,
          price: item.prices[0].price,
          quantity: 1,
          url: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        },
      ]);
      settQuantity((prev) => prev + 1);
    }
  }
  function removeFromCart(item) {
    const updatedCart = cart.filter((elem) => elem.id != item.id);
    setCart(() => updatedCart);
    let q = 0;
    cart.forEach((i) => (q += i.quantity));
    setQuantity(q);
  }
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        increaseItem,
        decreaseItem,
        quantity,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCartContext = () => useContext(cartContext);
