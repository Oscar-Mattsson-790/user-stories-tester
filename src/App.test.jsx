import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders navigation, product display, and cart", () => {
    render(<App />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getAllByTestId("product-item").length).toBeGreaterThan(0);
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
