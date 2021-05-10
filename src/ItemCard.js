import React from "react";
import { useGlobalContext } from "./context";

export const ItemCard = ({ name, price, image, description }) => {
  const { addItem } = useGlobalContext();

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
          <div
            className="add-to-basket-btn"
            onClick={() => addItem(name, price)}
          >
            Add To Basket
          </div>
        </div>
      </div>
    </div>
  );
};
