import React from "react";
import { useGlobalContext } from "./context";
import { ShoppingBasketItemContainer } from "./ShoppingBasketItemContainer";
import formatToCurrency from "./utils";

export const ShoppingBasket = ({ toggleBasket }) => {
  const {
    total,
    numberOfItems,
    isShoppingBasketOpen,
    toggleShoppingBasket,
  } = useGlobalContext();

  return (
    <>
      <div
        className={`${
          isShoppingBasketOpen
            ? "shopping-basket-background show-shopping-basket-background"
            : "shopping-basket-background"
        }`}
        onClick={toggleShoppingBasket}
      ></div>
      <div
        className={`${
          isShoppingBasketOpen
            ? "shopping-basket show-shopping-basket"
            : "shopping-basket"
        }`}
      >
        <h1>Shopping Basket</h1>
        {numberOfItems > 0 ? (
          <ShoppingBasketItemContainer />
        ) : (
          <p className="empty-basket-text">Your Basket is Currently Empty</p>
        )}
        <div className="shopping-basket-total">
          <p>Total</p>
          <p className="total-amount">{formatToCurrency(total)}</p>
        </div>
        {/* {numberOfItems > 0 && (
          <button className="checkout-btn">Checkout</button>
        )} */}
      </div>
    </>
  );
};
