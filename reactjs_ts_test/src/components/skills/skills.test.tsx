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

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  // Now we testing how to not find something in the dom
  // like some content that should not be in the dom before the login state
  // is changed.

  // Note: All getBy class of queries throws an error if they can't find the element
  // So we use queryBy and queryAllBy - returns node if found else null
  // "get" will be replaced with "query" for example getByRole =>  queryByRole

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // Appearance / Disappearance Cases
  // Like display after some data is fetched from the external API
  // getByRole class of queries fail to handle such scenerios
  // For these cases we use findBy and findAllBy class of queries
  // findBy -  returns promise which resolves when node found else promise is rejected
  // after a default timeout of 1000ms can be changed
  // Note: async await is important

  test("Start learnin button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
