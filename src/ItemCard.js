import React from "react";
import { useGlobalContext } from "./context";

export const ItemCard = ({ name, price, image, description, quantity }) => {
  const { addItem, increment, decrement } = useGlobalContext();

  return (
    <div className="item-card">
      <h2 className="item-heading">
        {name}
        <span>
          <span>£</span>
          {price}
        </span>
      </h2>
      <div className="item-info">
        <div className="item-photo">
          <img src={image} alt={name}></img>
        </div>
        <div className="item-details">
          <p className="item-description">{description}</p>
          {quantity > 0 ? (
            <div className="item-quantity-btns">
              <button
                className="item-qty-btn"
                aria-label="decrement"
                onClick={() => decrement(name)}
              >
                &#8722;
              </button>
              <div className="item-qty-text">{quantity || 0}</div>
              <button
                className="item-qty-btn"
                aria-label="increment"
                onClick={() => increment(name)}
              >
                &#43;
              </button>
            </div>
          ) : (
            <button
              className="add-to-basket-btn"
              onClick={() => addItem(name, price)}
            >
              Add To Basket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
