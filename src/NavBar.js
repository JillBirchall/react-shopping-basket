import React from "react";
import CakeIcon from "./images/cake_icon.png";

export const NavBar = ({ toggleBasketOpen }) => {
  return (
    <nav className="nav-bar">
      <h1 className="main-title">THE CAKE ADVENTURE</h1>
      <div className="shopping-basket-btn-container">
        <button
          className="shopping-basket-btn"
          onClick={toggleBasketOpen}
          aria-label="Shopping Basket"
        >
          <img src={CakeIcon} alt="cake" className="cake-icon" />
        </button>
        <div className="shopping-basket-notification">0</div>
      </div>
    </nav>
  );
};
