import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const { title, price, quantity } = food;
    const totalPrice = parseFloat(price) * quantity;
    const updatedFood = { ...food, totalPrice };
    setCartItems([...cartItems, updatedFood]);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.totalPrice);
    });
    console.log(totalPrice);
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        calculateTotalPrice,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
