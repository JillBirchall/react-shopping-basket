import { useState } from "react";
import "./App.css";
import { ItemCard } from "./ItemCard";
import { ShoppingBasket } from "./ShoppingBasket";
import { NavBar } from "./NavBar";
import Cakes from "./data";

function App() {
  const [cakes, setCakes] = useState(Cakes);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  function toggleBasketOpen() {
    setIsBasketOpen(!isBasketOpen);
  }

  return (
    <div className="main-container">
      <NavBar toggleBasketOpen={toggleBasketOpen} />
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
