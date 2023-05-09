import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Note: 1 file is considered to be one Test Suite

// Describe is used to group test
// It can be used parallel and nested
// Similarly describe can also use describe.only and describe.skip
// describe("Greet", () => {
//   test("Renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   // describe can also be nested
//   describe("Nested", () => {
//     // Only and skip
//     // 1. if in a file we have more than 1 test and we add
//     // 2. test.only then only that perticular test will be done
//     // 3. if we use test.skip that perticular test will be skipped

//     test("Renders with a name", () => {
//       render(<Greet name="Faraz" />);
//       const textElement = screen.getByText("Hello Faraz");
//       expect(textElement).toBeInTheDocument();
//     });
//   });
// });


// For coverage Threshold
describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

 
});
