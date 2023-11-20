import "./App.css";
import CoffeeList from "./components/CoffeeList/CoffeeList";

function App() {
  const coffees = [
    { id: 1, name: "Espresso", price: "50kr" },
    { id: 2, name: "Latte", price: "40kr" },
  ];

  return (
    <div>
      <h1>Välkommen till vårt kaffeutbud</h1>
      <CoffeeList coffees={coffees} />
    </div>
  );
}

export default App;
