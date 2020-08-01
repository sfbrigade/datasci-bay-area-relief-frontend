import React from "react";
import { render, screen } from "@testing-library/react";
import ThankYou from "./ThankYou";
import {act} from "react-dom/test-utils";


describe("Thank you page", () => {
  
  it("renders heading and description", () => {
    render(<ThankYou />);
    expect(screen.getByRole("heading")).toHaveTextContent("Thank you");
    expect(
      screen.getByText(
        "This project couldn’t have happened without the generosity of the friends and family of Sanat Moningi. Thank you also to our sponsors, who provided us the tools to make this portal possible."
      )
    ).toBeInTheDocument();

    
    expect(screen.getByTestId("CodeForSFLogo")).toBeVisible(); 
    expect(screen.getByTestId("GitHubLogo")).toBeVisible(); 
    expect(screen.getByTestId("ReactLogo")).toBeVisible(); 
    expect(screen.getByTestId("ThankYouImg")).toBeVisible(); 
  });

  it("render links to websites", () => {
    render(<ThankYou />);

    act(() => {
      screen.getByTestId("CodeForSFLink").click();
    });
    expect(screen.getByTestId("CodeForSFLink")).toBeInTheDocument();
    
    act(() => {
      screen.getByTestId("GitHubLink").click();
    });
    expect(screen.getByTestId("GitHubLink")).toBeInTheDocument();
    
    act(() => {
      screen.getByTestId("ReactLink").click();
    });
    expect(screen.getByTestId("ReactLink")).toBeInTheDocument();
   
  });







});
