import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./Aboutus";

describe("About us", () => {
  it("renders heading and description", () => {
    const { container } = render(
      <>
        <AboutUs />
      </>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("About");
    expect(
      screen.getByText(
        "We are a group of volunteers invested in working together to improve the City and County of San Francisco, often using technology to support our efforts. By connecting people, organizations, resources, tools, and networks to build for San Francisco, we will all thrive."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "The Data Science Working Group’s primary purpose is to efficiently assess, inspire, and tackle Code for San Francisco’s data science needs, as well as to help the City and other brigades with their data science needs whenever appropriate."
      )
    ).toBeInTheDocument();

    expect(container.querySelector("svg")?.textContent).toBe("About.svg");
  });
});
