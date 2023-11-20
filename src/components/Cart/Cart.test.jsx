import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Varukorgstester", () => {
  it("should render cart correctly", () => {
    render(<Cart />);
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
