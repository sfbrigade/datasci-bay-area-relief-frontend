import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Home from "./Home";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import search from "./api";
jest.mock("./api");

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

  it('displays a business type dropdown that changes values on different options', () => {
    const businessTypeSelect = screen.getByTestId('business-type-select');
    expect(businessTypeSelect).toHaveValue('');

    fireEvent.change(businessTypeSelect, {target: {value: 'small-business'}});
    expect(businessTypeSelect).toHaveValue('small-business')

  });

  describe('Search Button', () => {
    it('should have a Search button that takes the user to the results page', () => {
      const searchButton = screen.getByText("Search");

      fireEvent.click(searchButton);
      expect(history.push).toHaveBeenCalledWith("/results");
    });

    it('searches with the form data', () => {
      const searchButton = screen.getByText("Search");
      const businessTypeSelect = screen.getByTestId('business-type-select');

      fireEvent.change(businessTypeSelect, {target: {value: 'small-business'}});
      fireEvent.click(searchButton);
      expect(search).toHaveBeenCalledWith('small-business');
    });
  });
});
