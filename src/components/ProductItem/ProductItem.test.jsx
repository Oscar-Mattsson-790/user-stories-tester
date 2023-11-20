import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";

describe("Produktobjektstester", () => {
  it("should render product item correctly", () => {
    render(<ProductItem />);
    expect(screen.getByTestId("product-item")).toBeInTheDocument();
  });
});
