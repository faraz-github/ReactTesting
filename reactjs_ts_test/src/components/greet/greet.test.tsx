import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i); // regex for case independent check
  expect(textElement).toBeInTheDocument();
});
 