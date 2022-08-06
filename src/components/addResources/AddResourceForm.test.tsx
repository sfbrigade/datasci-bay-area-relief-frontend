import React from "react";
import { getByLabelText, render } from "@testing-library/react";
import AddResourceForm from "./AddResourceForm";

describe("Add Resource Form", () => {
  it("renders the form", () => {
    const {getByText, getByTestId, getByLabelText} = render(<AddResourceForm/>);
    getByText("Add Organization with resources for small businesses.");
    getByLabelText("First Name");
    getByLabelText("Last Name");
    getByLabelText("Email");
    getByLabelText("Phone Number");
    getByLabelText("Url");
    getByText("Add Resource");
  });
});
