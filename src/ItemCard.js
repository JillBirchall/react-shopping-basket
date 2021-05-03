import React from "react";

export const ItemCard = ({ name, price, image, description }) => {
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
          <div className="quantity-container">
            <button className="quantity-btn">
              <span>&#8722;</span>
            </button>
            <span className="quantity">3</span>
            <button className="quantity-btn">
              <span>&#x2b;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
