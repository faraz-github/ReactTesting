import { renderHook } from "@testing-library/react"; // notice renderHook is used
import { useCounter } from "./useCounter";

// Now we will test a custom hook as they are pretty common in React

describe("useCounter", () => {
  test("should render initial count", () => {
    //since the hook doesn't have any dom element we don't need screen to test it
    // also render is not used for custom hooks
    // instead we use renderHook
    // What it does is call the hook in functional component and store the result in an object
    const { result } = renderHook(useCounter);
    // it will have result.current with our hook values
    expect(result.current.count).toBe(0);
  });

  // How we pass any props for custom hooks
  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });
});
