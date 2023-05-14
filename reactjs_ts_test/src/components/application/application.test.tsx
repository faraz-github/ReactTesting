import { render, screen } from "@testing-library/react";
import { Application } from "./application";

// Now we learning about queries that we use commonly for testing
// RTL Queries - React Testing Library Queries
// 1. We can start with getByRole query which queries based on HTML aria attribute
// a. getByRole also accepts options
// b. {name: nameValue, }
// c. nameValue = label || textContent || aria-lable attribute of the form element
// d. name is case sensitive
// e. {level: levelValue}
// f. levelValue = 1, 2, 3, 4, 5, 6 corresponding to h1 to h6
// g. some more option can be used like [ hidden, selected, checked, pressed]

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // Usage with name
    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form", // Usage of textContent case sensitive
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", {
    //   name: "Section 1", // Usage of textContent case sensitive
    // });
    // expect(sectionHeading).toBeInTheDocument();

    // Usage with level
    const pageHeading = screen.getByRole("heading", {
      level: 1, // Usage of level
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2, // Usage of level
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory"); // Usage of getByText usually used by <p> <div> <span> tags
    expect(paragraphElement).toBeInTheDocument(); // Also selector can be used like the  getByLabelText

    const nameElement = screen.getByRole("textbox", { name: "Name" }); // Usage of label case sensitive
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {selector: "input"}); // Usage of getByLabelText with htmlFor and id
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname"); // Usage of getByPlaceholderText
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobApplicationElement = screen.getByRole("combobox");
    expect(jobApplicationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termElement2 = screen.getByLabelText("I agree to the terms and conditions"); // Usage of nested label without htmlFor and id
    expect(termElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
