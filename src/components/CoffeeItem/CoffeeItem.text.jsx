import { render, screen } from "@testing-library/react";
import CoffeeItem from "./CoffeeItem";

describe("CoffeeItem", () => {
  it("visar information för en kaffesort", () => {
    render(<CoffeeItem name="Espresso" price="50kr" />);

    expect(screen.getByText("Espresso")).toBeInTheDocument();
    expect(screen.getByText("50kr")).toBeInTheDocument();
  });
});
