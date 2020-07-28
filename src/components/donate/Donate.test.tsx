import React from "react";
import { render, screen } from "@testing-library/react";
import Donate from "./Donate";
import {act} from "react-dom/test-utils";


describe("Donate page", () => {
  
  it("renders heading and description", () => {
    const { container } = render(
      <>
        <Donate />
      </>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Donate");

    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Black Lives Matter')).toBeInTheDocument();
    expect(screen.getByText('LGBT')).toBeInTheDocument();

  });

  it("render links to donate websites", () => {
    const {getByText} = render(
      <>
        <Donate />
      </>
    );

    act(() => {
      screen.getByText(/GoFundMe's/).click()
    });
    expect(screen.getByText(/GoFundMe's/)).toHaveTextContent("GoFundMe's in the Bay area");
    
    act(() => {
    screen.getByText(/Redwood City/).click()
    });
    expect(screen.getByText(/Redwood City/)).toHaveTextContent("Redwood City Small Business Relief Fund")
  
    act(() => {
      screen.getByText(/UC Berkeley/).click()
      });
    expect(screen.getByText(/UC Berkeley/)).toHaveTextContent("UC Berkeley Law Pro Bono")
    
    act(() => {
      screen.getByText(/COVID-19/).click()
      });
    expect(screen.getByText(/COVID-19/)).toHaveTextContent("COVID-19 Regional Response Fund")
      
    act(() => {
      screen.getByText(/Norcal/).click()
      });
    expect(screen.getByText(/Norcal/)).toHaveTextContent("Norcal Small Business Relief Fund")
      
    act(() => {
      screen.getByText(/Fair/).click()
      });
    expect(screen.getByText(/Fair/)).toHaveTextContent("One Fair Wage")
    
    act(() => {
      screen.getByText(/Berkeley/).click()
      });
    expect(screen.getByText(/Berkeley/)).toHaveTextContent("Berkeley Relief Fund")
    
    act(() => {
      screen.getByText(/Mutual Aid/).click()
      });
    expect(screen.getByText(/Mutual Aid/)).toHaveTextContent("Berkeley Mutual Aid")
    
    act(() => {
      screen.getByText(/China Towns/).click()
      });
    expect(screen.getByText(/China Towns/)).toHaveTextContent("Save Our China Towns ")
    
    act(() => {
      screen.getByText(/MEDA/).click()
      });
    expect(screen.getByText(/MEDA/)).toHaveTextContent("MEDA (Mission Economic Development Agency)")
    
    act(() => {
      screen.getByText(/YouTube/).click()
      });
    expect(screen.getByText(/YouTube/)).toHaveTextContent("YouTube Ad Proceeds to #BLMa")
    
    act(() => {
      screen.getByText(/BAOBOB/).click()
      });
    expect(screen.getByText(/BAOBOB/)).toHaveTextContent("Bay Area Organization of Black Owned Businesses (BAOBOB)")
    
    act(() => {
      screen.getByText(/Restaurants/).click()
      });
    expect(screen.getByText(/Restaurants/)).toHaveTextContent("Black Owned Restaurants")
    
    act(() => {
      screen.getByText(/ReLinkefFund/).click()
      });
    expect(screen.getByText(/ReLinkefFund/)).toHaveTextContent("Black Owned Business ReLinkefFund")
    
    act(() => {
      screen.getByText(/Chamber/).click()
      });
    expect(screen.getByText(/Chamber/)).toHaveTextContent("Silicon Valley Central Chamber of Commerce")
    
    act(() => {
      screen.getByText(/SF Gov/).click()
      });
    expect(screen.getByText(/SF Gov/)).toHaveTextContent("SF Gov")
    
    act(() => {
      screen.getByText(/Queer/).click()
      });
    expect(screen.getByText(/Queer/)).toHaveTextContent("Queer: Way Outo")
    
    act(() => {
      screen.getByText(/Beard/).click()
      });
    expect(screen.getByText(/Beard/)).toHaveTextContent("James Beard Foundation")
    
    act(() => {
      screen.getByText(/Webinars/).click()
      });
    expect(screen.getByText(/Webinars/)).toHaveTextContent("James Beard Webinars")
    

    


});

});
