import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

// Now we will learn getAll "All" query

// Type - Text Match
// The first argument that we pass in our queries is not actually a string but a TypeMatch
// It can be string | regex | function
// 

const skills = ["HTML", "CSS", "JavaScript"];

describe("Skills", () => {
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
