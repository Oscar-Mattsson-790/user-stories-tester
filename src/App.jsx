import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProdcutDisplay from "./components/ProductItem/ProductItem";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Navigation />
      <ProdcutDisplay />
      <Cart />
    </div>
  );
}

export default App;
