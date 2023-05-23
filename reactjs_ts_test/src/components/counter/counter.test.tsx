import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"; // First we need to import this package for user interaction

import { Counter } from "./counter";

// Now we will practice how to use the user-event library to perform user interactions

describe("Counter", () => {
  // Tests for checking the elements to be in the dom
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  // Tests for checking the initial state of component
  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0"); // make sure 0 is string
  });

  // Tests for user interaction

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup(); // This is to make this user interaction ready

    // Step 1 : We render the component
    render(<Counter />);
    // Step 2 : We find the user interactable element
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    // Step 3: We perform the interaction i.e. click or other event
    // Note: all user interactions are async so we do it using async/await
    await user.click(incrementButton);

    // Step 4: find the element that is affected by the interaction
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  // Some mouse events available are
  // 1. click()
  // 2. dblClick()
  // 3. tripleClick()
  // 4. hover()
  // 5. unhover()

  // For more precision pointer API's can be used

  // 1. pointer({key: "[MouseLeft]"}) // Simulates left mouse click
  // 2. pointer({key: "[MouseLeft][MouseRight]"}) // Simulates left and right click
  // 3. pointer("[MouseLeft][MouseRight]") // If key is the only argument
  // 4. pointer("[MouseLeft>]") // To simulated hold button
  // 5. pointer("[/MouseLeft]") // To simulated releasing button

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup(); // This is to make this user interaction ready

    // Step 1 : We render the component
    render(<Counter />);
    // Step 2 : We find the user interactable element
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    // Step 3: We perform the interaction i.e. click or other event
    // Note: all user interactions are async so we do it using async/await
    await user.dblClick(incrementButton);

    // Step 4: find the element that is affected by the interaction
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  // Now we will test some keyboard user event
  test("render a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // number is spinbutton

    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  // Now we will test some keyboard tab press focus

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // number is spinbutton
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab(); // tab is used for tab based focus
    
    expect(incrementButton).toHaveFocus(); // toHaveFocus is matcher for checking current focus

    await user.tab();
   
    expect(amountInput).toHaveFocus();

    await user.tab();
   
    expect(setButton).toHaveFocus();

    // Note 
    // There are three diffrent type of apis associated with keyboard
    // Utility API
    // - user.type()
    // - user.clear()
    // - user.selectOptions()
    // - user.deselectOptions()
    // - user.upload()
    // Convenience API
    // - user.tab()
    // Clipboard API
    // - user.copy()
    // - user.cut()
    // - user.paste()

  });


});
