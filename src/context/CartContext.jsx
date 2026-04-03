import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
  try {
    const saved = localStorage.getItem("shopZone_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Storage error:", error);
    return []; 
  }
});

  useEffect(() => {
    localStorage.setItem("shopZone_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item?.quantity === 1) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = Number(cart.reduce(
    (acc, item) => acc + (item.price * item.quantity),
    0
  ).toFixed(2));

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isInCart = (id) => cart.some((item) => item.id === Number(id));

  const getItemQuantity = (id) => {
    const item = cart.find((item) => item.id === Number(id));
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItems,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};