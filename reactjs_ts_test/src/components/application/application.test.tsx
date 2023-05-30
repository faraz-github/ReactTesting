import { render, screen } from "@testing-library/react";
import { Application } from "./application";

// Now we will learn some static analysis which ensures the quality of written code
// For this we can use diffrent tools like typescript, eslint, prettier, husky, lint-staged etc

// The below code started to give error after installing ESLint extension right inside the ide
// console.log(name);
// const name = "Faraz";

// Now we are learning priority order for queries
// It is very important to know these and use them in priorilty.
// 1. getByRole (for almost anything)
// 2. getByLabelText (good with forms)
// 3. getByPlaceholderText (one more good for form)
// 4. getByText
// 5. getByDisplayValue
// 6. getByAltText
// 7. getByTitle
// 8. getByTestId

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
  // test("renders correctly", async() => {
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
    // If we add async await on testing queries that are sync
    // eslint gives us error in our ide
    // const pageHeading = await screen.getByRole("heading", {
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

    const closeElement = screen.getByTitle("close"); // Usage of getByTitle usually used tags that have title attribute in it i.e. <span>
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop"); // Usage of getByAltText typically used by <img> <input> <area> or custom HTML Element
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element"); // Usage of getByTestId typically used by tags that have data-testid attribute i.e. <div>
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" }); // Usage of label case sensitive
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" }); // Usage of getByLabelText with htmlFor and id
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname"); // Usage of getByPlaceholderText
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Vishwas"); // Usage of getByDisplayValue typically used with form controls
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobApplicationElement = screen.getByRole("combobox");
    expect(jobApplicationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    ); // Usage of nested label without htmlFor and id
    expect(termElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // eslint-plugin-jest-dom with the help of this package even assertions can be
    // written in best ways
    // hint use buld when squigly
    // expect(submitButtonElement).not.toBeEnabled();
    expect(submitButtonElement).toBeDisabled();
  });
});
