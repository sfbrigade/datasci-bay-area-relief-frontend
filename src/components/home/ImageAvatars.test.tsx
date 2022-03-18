import React from "react";
import {shallowRenderToMatchSnapshot} from "../../util/unitTests";

import ImageAvatars from "./ImageAvatars";
import {render, screen} from "@testing-library/react";

describe("<ImageAvatars>", () => {
  it("renders correctly", () => {
    shallowRenderToMatchSnapshot(<ImageAvatars />);
  });

  it("displays rocio name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByText("Rocio Ng")).toBeVisible();
    expect(screen.getByAltText("Rocio")).toHaveAttribute("src", "rocio.jpg");
    expect(screen.getByText("Project Lead")).toBeVisible();
  });

  it("displays emilys name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByText("Emily Kasa")).toBeVisible();
    expect(screen.getByAltText("Emily")).toHaveAttribute("src", "emily.jpg");
    expect(screen.getByText("Data Jam Lead")).toBeVisible();
  });

  it("displays alexs name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("Alex")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("Alex Kerr")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });
});
