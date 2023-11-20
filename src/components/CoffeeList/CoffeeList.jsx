import CoffeeItem from "../CoffeeItem/CoffeeItem";

export default function CoffeeList({ coffees }) {
  return (
    <div>
      {coffees.map((coffee) => (
        <CoffeeItem key={coffee.id} name={coffee.name} price={coffee.price} />
      ))}
    </div>
  );
}
