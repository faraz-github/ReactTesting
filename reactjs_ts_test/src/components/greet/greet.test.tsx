import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

// Only and skip
// 1. if in a file we have more than 1 test and we add
// 2. test.only then only that perticular test will be done
// 3. if we use test.skip that perticular test will be skipped

test("Greet renders with a name", () => {
  render(<Greet name="Faraz" />);
  const textElement = screen.getByText("Hello Faraz");
  expect(textElement).toBeInTheDocument();
});
