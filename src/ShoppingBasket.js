import React from "react";
import { ShoppingBasketItem } from "./ShoppingBasketItem";

export const ShoppingBasket = () => {
  return (
    <div className="shopping-basket-container">
      <div className="shopping-basket">
        <h1>Shopping Basket</h1>
        <div className="shopping-basket-items-container">
          <ShoppingBasketItem />
          <ShoppingBasketItem />
          <ShoppingBasketItem />
          <ShoppingBasketItem />
          <ShoppingBasketItem />
          <ShoppingBasketItem />
        </div>
        <div className="shopping-basket-total">
          <p>Total</p>
          <p className="total-amount">
            £<span>37.89</span>
          </p>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};
