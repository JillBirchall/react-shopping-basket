import "./App.css";
import { ItemCard } from "./ItemCard";
import { ShoppingBasket } from "./ShoppingBasket";
import { NavBar } from "./NavBar";
import { useGlobalContext } from "./context";

function App() {
  const { cakes } = useGlobalContext();

  return (
    <div className="main-container">
      <NavBar />
      <ShoppingBasket />
      <main className="item-container">
        {cakes.map((cake) => {
          return (
            <ItemCard
              name={cake.name}
              key={cake.id}
              description={cake.description}
              image={cake.image}
              price={cake.price}
              quantity={cake.qty}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
