import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  shoppingBasket: [],
  total: 0,
  numberOfItems: 0,
  isShoppingBasketOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (itemName, itemPrice) => {
    dispatch({ type: "ADD_ITEM", payload: { itemName, itemPrice } });
  };

  const removeItem = (itemName) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemName });
  };

  const increment = (itemName) => {
    dispatch({ type: "INCREMENT", payload: itemName });
  };

  const decrement = (itemName) => {
    dispatch({ type: "DECREMENT", payload: itemName });
  };

  const toggleShoppingBasket = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALS" });
  }, [state.shoppingBasket]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        increment,
        decrement,
        toggleShoppingBasket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
