import React from "react";
import {render} from "@testing-library/react";
import AddResourceForm from "./AddResourceForm";

describe("Add Resource Form", () => {
  it("renders the form", () => {
    const {getByText, getByTestId} = render(<AddResourceForm/>);
    getByText("Add Organization with resources for small businesses.");
    getByText("First Name");
    getByText("Last Name");
    getByText("Email");
    getByText("Phone Number");
    getByTestId("county");
    getByTestId("orgType");
    getByTestId("reliefType");
    getByTestId("comments");
    getByText("Add Resource");
  });
});
