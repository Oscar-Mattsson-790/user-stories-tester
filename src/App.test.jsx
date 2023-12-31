import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renderar huvudtiteln", () => {
    render(<App />);
    expect(
      screen.getByText("Välkommen till vårt kaffeutbud")
    ).toBeInTheDocument();
  });

  it("visar kaffesorter från CoffeeList", () => {
    render(<App />);
    expect(screen.getByText("Espresso")).toBeInTheDocument();
    expect(screen.getByText("50kr")).toBeInTheDocument();
    expect(screen.getByText("Latte")).toBeInTheDocument();
    expect(screen.getByText("40kr")).toBeInTheDocument();
  });
});
