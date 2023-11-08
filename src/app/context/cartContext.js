"use client";
import { createContext, useContext, useState } from "react";

export const cartContext = createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const checkCart = (item) => {
    if (!cart) return false;
    return cart.find((elem) => elem.id === item.id);
  };
  const increaseItem = (item) => {
    const updatedCart = cart.map((elem) => {
      if (item.id === elem.id) {
        elem.quantity += 1;
        setQuantity((prev) => prev + 1);
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
        setQuantity((prev) => prev - 1);
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
      setQuantity((prev) => prev + 1);
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCartContext = () => useContext(cartContext);
