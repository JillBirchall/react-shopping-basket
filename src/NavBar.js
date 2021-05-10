import React from "react";
import CakeIcon from "./images/cake_white_48dp.svg";
import { useGlobalContext } from "./context";

export const NavBar = () => {
  const { numberOfItems, toggleShoppingBasket } = useGlobalContext();

  return (
    <nav className="nav-bar">
      <h1 className="main-title">THE CAKE ADVENTURE</h1>
      <div className="shopping-basket-btn-container">
        <button
          className="shopping-basket-btn"
          onClick={toggleShoppingBasket}
          aria-label="Shopping Basket"
        >
          <img src={CakeIcon} alt="cake" className="cake-icon" />
          <div className="shopping-basket-notification">{numberOfItems}</div>
        </button>
      </div>
    </nav>
  );
};
