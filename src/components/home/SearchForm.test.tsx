import React from "react";
import {fireEvent, getByPlaceholderText, getByTestId, render, screen} from "@testing-library/react";
import {SearchForm} from "./SearchForm";
import {idleForIO} from "../../testUtils";

describe('SearchForm selections', () => {
  it('renders a SearchForm with two default Anys', () => {
    render(<SearchForm />);
    const anyObject = screen.getAllByRole('option', {name: 'Any'});
    expect(anyObject).toHaveLength(2);
  });

  it('can select another orgType', async () => {
    const {container, getByTestId, getAllByRole} = render(<SearchForm />);
    console.log(screen.getAllByTestId('org-type-select').length);
    fireEvent.change(getByTestId('org-type-select'),
      { target: { value: 'smallBusiness' } });

    await idleForIO();

    const smallBusinessOption = getAllByRole('option', {name: 'Small business'});
    expect(smallBusinessOption).toHaveLength(1);
    const anyObject = getAllByRole('option', {name: 'Any'});
    expect(anyObject).toHaveLength(1);
  });
});
