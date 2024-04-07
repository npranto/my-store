import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item?.price || 0), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isItemInCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
