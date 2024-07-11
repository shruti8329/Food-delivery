import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId, removeAll = false) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      if (removeAll || updatedCartItems[itemId] <= 1) {
        delete updatedCartItems[itemId];
      } else {
        updatedCartItems[itemId] -= 1;
      }
      return updatedCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalItemCount = () => {
    let itemCount = 0;
    for (const item in cartItems) {
      itemCount += cartItems[item];
    }
    return itemCount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalItemCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
