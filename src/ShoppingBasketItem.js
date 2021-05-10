import React from "react";
import { useGlobalContext } from "./context";
import formatToCurrency from "./utils";

export const ShoppingBasketItem = ({ itemName, subtotal, qty }) => {
  const { removeItem, increment, decrement } = useGlobalContext();

  return (
    <div className="shopping-basket-item">
      <p className="shopping-basket-item-name">{itemName}</p>
      <div className="shopping-basket-qty-container">
        <div className="shopping-basket-qty-adjust">
          <button
            className="shopping-basket-qty-btn"
            onClick={() => decrement(itemName)}
          >
            &#60;
          </button>
          <span className="shopping-basket-qty-number">{qty}</span>
          <button
            className="shopping-basket-qty-btn"
            onClick={() => increment(itemName)}
          >
            &#62;
          </button>
        </div>
        <button
          className="remove-item-btn"
          onClick={() => removeItem(itemName)}
        >
          remove
        </button>
      </div>
      <p className="item-subtotal">{formatToCurrency(subtotal)}</p>
    </div>
  );
};
