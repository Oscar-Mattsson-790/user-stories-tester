import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation renders correctly", () => {
  render(<Navigation />);
  expect(screen.getByTestId("navigation")).toBeInTheDocument();
});
