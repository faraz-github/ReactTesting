import { render, screen } from "@testing-library/react";
import { Users } from "./users";

// Now we will learn how to mock the api http requests

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
