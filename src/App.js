import "./App.css";
import { ItemCard } from "./ItemCard";
import Cakes from "./data";
import { useState } from "react";
import CakeIcon from "./images/cake_icon.png";
import { ShoppingBasket } from "./ShoppingBasket";

function App() {
  const [cakes, setCakes] = useState(Cakes);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
    <div className="main-container">
      <nav className="nav-bar">
        <h1 className="main-title">THE CAKE ADVENTURE</h1>
        <div className="shopping-basket-btn-container">
          <button
            className="shopping-basket-btn"
            onClick={(e) => setIsBasketOpen(!isBasketOpen)}
            aria-label="Shopping Basket"
          >
            <img src={CakeIcon} alt="cake" className="cake-icon" />
          </button>
          <div className="shopping-basket-notification">0</div>
        </div>
      </nav>
      {isBasketOpen && <ShoppingBasket />}
      <main className="item-container">
        {cakes.map((item) => {
          return (
            <ItemCard
              name={item.name}
              key={item.id}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
