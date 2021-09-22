import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartData, setCartData] = useState([]);

  // checking if loaded for first time so that initial values in localstorage are not null
  const dataExists = localStorage.getItem("dataExists");
  if (!dataExists) {
    localStorage.setItem("dataExists", true);
    localStorage.setItem("cartItemNumber", 0);
    localStorage.setItem("cartAmount", 0);
    localStorage.setItem("cartData", JSON.stringify([]));
  }

  useEffect(() => {
    setCartItemNumber(JSON.parse(localStorage.getItem("cartItemNumber")));
    setCartAmount(JSON.parse(localStorage.getItem("cartAmount")));
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItemNumber", cartItemNumber);
    localStorage.setItem("cartAmount", cartAmount);
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartItemNumber, cartAmount, cartData]);

  return (
    <CartContext.Provider
      value={[
        cartItemNumber,
        setCartItemNumber,
        cartAmount,
        setCartAmount,
        cartData,
        setCartData,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
}
