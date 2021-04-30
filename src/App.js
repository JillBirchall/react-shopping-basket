import "./App.css";
import { ItemCard } from "./ItemCard";
import data from "./data";
import { useState } from "react";

function App() {
  const [cakes, setCakes] = useState(data);

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="main-title">THE CAKE ADVENTURE</h1>
      </header>
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
