import { render, screen } from "@testing-library/react";
import { Users } from "./users";

// Now we will learn how to mock the api http requests

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  // Now we test using msw

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    // A good alternative would be to create mock array in diffrent file to used where needed and so the array.length
    expect(users).toHaveLength(3);

    
  });
});
