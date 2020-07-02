import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Home from "./Home";
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";

describe('Home', () => {
  const history = createMemoryHistory();
  jest.spyOn(history, 'push');

  beforeEach(() => {
    render(
      <Router history={history}>
        <Home/>
      </Router>
    )
  });

  it('renders a homepage title with description', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Find Loans & Grants');
    expect(screen.getByText('Search our database for Bay Area loans')).toBeInTheDocument();
  });

  it('displays a business type dropdown that changes values on different options',  () => {  
    const businessTypeSelect = screen.getByTestId('business-type-select')
    expect(businessTypeSelect).toHaveValue('')
    
    fireEvent.change(businessTypeSelect, { target: { value: 'small-business' }})
    expect(businessTypeSelect).toHaveValue('small-business')

  });

  it('should have a Go button that takes the user to the results page', () => {
    const goButton = screen.getByText(/go/i);

    fireEvent.click(goButton);
    expect(history.push).toHaveBeenCalledWith("/results");
  });
});