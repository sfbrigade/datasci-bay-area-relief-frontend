import React from "react";
import { render, screen } from "@testing-library/react";
import HowItWorks from "./HowItWorks";


describe("How It Works", () => {
  it("renders heading and description", () => {
    const { container } = render(
      <>
        <HowItWorks />
      </>
    );
   
    expect(screen.getByRole("heading")).toHaveTextContent("How it works");
    
    expect(screen.getByText('We scrape the internet')).toBeInTheDocument();
    expect(screen.getByText('Search our database')).toBeInTheDocument();
    expect(screen.getByText('Help us look')).toBeInTheDocument();

    expect(
      screen.getByText(
        "We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Found a fund that isn’t on our website? Help the community by letting us know, so we can add it to our database."
      )
    ).toBeInTheDocument();

    expect(screen.getByAltText('ImgLeft')).toBeInTheDocument();
    expect(screen.getByAltText('ImgMiddle')).toBeInTheDocument();
    expect(screen.getByAltText('ImgRight')).toBeInTheDocument();
  
  });

});

