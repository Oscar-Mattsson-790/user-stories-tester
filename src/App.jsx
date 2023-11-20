import { useState } from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList/CoffeeList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Espresso", price: "50" },
    { id: 2, name: "Latte", price: "40" },
  ]);

  const coffees = [
    { id: 1, name: "Espresso", price: "50kr" },
    { id: 2, name: "Latte", price: "40kr" },
  ];

  const addToCart = (coffee) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { id: coffee.id, name: coffee.name, price: coffee.price.slice(0, -2) },
    ]);
  };

  return (
    <div>
      <h1>Välkommen till vårt kaffeutbud</h1>
      <CoffeeList coffees={coffees} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default App;
