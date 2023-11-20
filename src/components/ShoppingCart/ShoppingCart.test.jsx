import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart", () => {
  it("visar produkter och totalt pris", () => {
    const cartItems = [
      { id: 1, name: "Espresso", price: "50" },
      { id: 2, name: "Latte", price: "40" },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    expect(screen.getByText("Espresso - 50")).toBeInTheDocument();
    expect(screen.getByText("Latte - 40")).toBeInTheDocument();
    expect(screen.getByText("Totalt pris: 90kr")).toBeInTheDocument();
  });
});
