import React from "react";
import { render, screen } from "@testing-library/react";
import ThankYou from "./ThankYou";

describe("Thank you page", () => {
  it("renders heading and description", () => {
    const { container } = render(
      <>
        <ThankYou />
      </>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Thank you");
    expect(
      screen.getByText(
        "This project couldn’t have happened without the generosity of the friends and family of Sanat Moningi. Thank you also to our sponsors, who provided us the tools to make this portal possible."
      )
    ).toBeInTheDocument();


   
    expect(screen.getByTestId("CodeForSFLogo")).toBeVisible(); 
    expect(screen.getByTestId("GitHubLogo")).toBeVisible(); 
    expect(screen.getByTestId("ReactLogo")).toBeVisible(); 
    
    
  });
});
