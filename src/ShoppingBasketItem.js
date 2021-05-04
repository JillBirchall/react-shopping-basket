import React from "react";

export const ShoppingBasketItem = () => {
  return (
    <div className="shopping-basket-item">
      <p>Strawberry Cake</p>
      <div className="shopping-basket-qty-container">
        <div className="shopping-basket-qty-adjust">
          <button className="shopping-basket-qty-btn">&#60;</button>
          <span className="shopping-basket-qty-number">1</span>
          <button className="shopping-basket-qty-btn">&#62;</button>
        </div>
        <button className="remove-item-btn">remove</button>
      </div>
      <p className="item-subtotal">
        £<span>2.99</span>
      </p>
    </div>
  );
};
