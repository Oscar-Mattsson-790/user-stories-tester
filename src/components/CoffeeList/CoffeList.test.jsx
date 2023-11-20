import { render, screen } from "@testing-library/react";
import CoffeeList from "./CoffeeList";

describe("CoffeeList", () => {
  it("visar alla kaffesorter", () => {
    const coffees = [
      { id: 1, name: "Espresso", price: "50kr" },
      { id: 2, name: "Latte", price: "40kr" },
    ];
    render(<CoffeeList coffees={coffees} />);

    expect(screen.getByText("Espresso")).toBeInTheDocument();
    expect(screen.getByText("50kr")).toBeInTheDocument();
    expect(screen.getByText("Latte")).toBeInTheDocument();
    expect(screen.getByText("40kr")).toBeInTheDocument();
  });
});
