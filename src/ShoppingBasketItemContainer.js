import React from "react";
import { ShoppingBasketItem } from "./ShoppingBasketItem";
import { useGlobalContext } from "./context";

export const ShoppingBasketItemContainer = () => {
  const { shoppingBasket } = useGlobalContext();

  return (
    <div className="shopping-basket-items-container">
      {shoppingBasket.map((item) => {
        return <ShoppingBasketItem key={item.itemId} {...item} />;
      })}
    </div>
  );
};
