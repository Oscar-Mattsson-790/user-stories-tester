export default function ShoppingCart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseInt(item.price, 10),
    0
  );

  return (
    <div>
      <h2>Varukorg</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p>Totalt pris: {totalPrice}kr</p>
    </div>
  );
}
