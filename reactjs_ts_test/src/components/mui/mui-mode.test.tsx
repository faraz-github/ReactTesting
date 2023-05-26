import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

// Now we will try testing components with providers
// As they share information passed through providers 
// Some tests can fail

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {
        wrapper: AppProviders // With the help of wrapper option in render we can pass provider
    });
    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("dark mode");
  });
});
