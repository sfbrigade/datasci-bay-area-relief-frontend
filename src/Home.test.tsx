import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Home from "./Home";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import search from "./api";
import {BusinessType, County} from './types';

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
    const businessTypeSelect = screen.getByLabelText('I am a...');
    expect(businessTypeSelect).toHaveValue('');

    fireEvent.change(businessTypeSelect, {target: {value: BusinessType.SmallBusiness}});
    expect(businessTypeSelect).toHaveValue(BusinessType.SmallBusiness)
  });

  it('has a dropdown for county that changes value when the user selects a different option', () => {
    const countySelect = screen.getByLabelText('County');
    expect(countySelect).toHaveValue('')

    fireEvent.change(countySelect, {target: {value: County.Alameda }})
    expect(countySelect).toHaveValue(County.Alameda)
  });

  describe('Search Button', () => {
    it('searches with the filter options the user has selected', () => {
      const searchButton = screen.getByText("Search");
      const businessTypeSelect = screen.getByLabelText('I am a...');
      const countySelect = screen.getByLabelText('County');


      fireEvent.change(businessTypeSelect, {target: {value: BusinessType.SmallBusiness}});
      fireEvent.change(countySelect, {target: {value: County.Alameda }})
      fireEvent.click(searchButton);

      expect(search).toHaveBeenCalledWith({
        businessType: BusinessType.SmallBusiness,
        county: County.Alameda
      });
      expect(history.push).toHaveBeenCalledWith("/results");
    });
  });
});
