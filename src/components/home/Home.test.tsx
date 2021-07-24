import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Home from "./Home";
import {Route, Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const history = createMemoryHistory();
jest.spyOn(history, "push");

beforeEach(() => {
  render(
    <Router history={history}>
      <Route component={Home} />
    </Router>
  );
});

describe("Home", () => {
  it("renders a homepage title with description", () => {
    expect(
      screen.getByRole("heading", {name: "Find Loans & Grants"})
    ).toBeVisible();
    expect(
      screen.getByText(/Search our database for Bay Area loans/i)
    ).toBeVisible();
  });

  it("renders a landing page sky svg with a front house image", () => {
    expect(screen.getByTitle("Landing page sky")).toBeVisible();
    expect(screen.getByRole("img", {name: "Storefront"})).toBeVisible();
  });

  it("renders a donate button and when pressed sends the user to the donate page", () => {
    const donateButton = screen.getByText("I want to donate");
    expect(donateButton).toBeVisible();
    fireEvent.click(donateButton);
    expect(history.push).toHaveBeenCalledWith("/donate");
  });

  describe("How It Works section", () => {
    it("renders heading and description", () => {
      expect(screen.getByRole("heading", {name: "How it works"})).toBeVisible();
      expect(screen.getByText("We scrape the internet")).toBeVisible();
      expect(screen.getByText("Search our database")).toBeVisible();
      expect(screen.getByText("Help us look")).toBeVisible();

      expect(
        screen.getByText(
          "We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find."
        )
      ).toBeVisible();

      expect(
        screen.getByText(
          "We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find."
        )
      ).toBeVisible();

      expect(
        screen.getByText(
          "Found a fund that isn’t on our website? Help the community by letting us know, so we can add it to our database."
        )
      ).toBeVisible();

      expect(screen.getByAltText("We scrape the internet")).toBeVisible();
      expect(screen.getByAltText("Search our database")).toBeVisible();
      expect(screen.getByAltText("Help us look")).toBeVisible();
    });
  });

  describe("About us", () => {
    it("renders heading and description", () => {
      expect(screen.getByRole("heading", {name: "About"})).toBeVisible();
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
    });
    it("renders a yellow half circle svg", () => {
      expect(screen.getByTitle("Yellow half circle")).toBeVisible();
    });
  });

  describe("Thank you section", () => {
    it("renders heading and description", () => {
      expect(screen.getByRole("heading", {name: "Thank you"})).toBeVisible();
      expect(
        screen.getByText(
          "This project couldn’t have happened without the generosity of the friends and family of Sanat Moningi. Thank you also to our sponsors, who provided us the tools to make this portal possible."
        )
      ).toBeVisible();
    });

    it("renders images and logos with links", () => {
      expect(screen.getByAltText("Thank you image")).toBeVisible();
      expect(screen.getByAltText("Code for SF Logo")).toBeVisible();
      expect(
        screen.getByAltText("Code for SF Logo").closest("a")
      ).toHaveAttribute("href", "https://www.codeforsanfrancisco.org/");

      expect(screen.getByAltText("GitHub Logo")).toBeVisible();
      expect(screen.getByAltText("GitHub Logo").closest("a")).toHaveAttribute(
        "href",
        "https://github.com/"
      );

      expect(screen.getByAltText("React Logo")).toBeVisible();
      expect(screen.getByAltText("React Logo").closest("a")).toHaveAttribute(
        "href",
        "https://reactjs.org/"
      );
    });

    it("renders a red triangle and teal square svg", () => {
      expect(screen.getByTitle("Red triangle")).toBeVisible();
      expect(screen.getByTitle("Teal square")).toBeVisible();
    });
  });
});
