import React from 'react';
import App from './App';
import {render, screen} from "@testing-library/react";

describe('App', () => {
  it('displays the home page by default', () => {
    render(<App/>);

    expect(screen.getByRole('heading')).toHaveTextContent('Find Loans & Grants');
  });
});
