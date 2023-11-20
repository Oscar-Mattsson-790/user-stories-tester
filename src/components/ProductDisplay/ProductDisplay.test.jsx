import { render, screen } from "@testing-library/react";
import ProductDisplay from "./ProductDisplay";

describe("Produktvisningstester", () => {
  it("should display product renders correctly", () => {
    render(<ProductDisplay />);
    expect(screen.getByTestId("product-display")).toBeInTheDocument();
  });
});
