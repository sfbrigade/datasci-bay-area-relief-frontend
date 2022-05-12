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

  it("displays adams name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByText("Adam Cobb")).toBeVisible();
    expect(screen.getByAltText("Adam")).toHaveAttribute("src", "adam.jpg");
    expect(screen.getByText("Engineer Lead")).toBeVisible();
  });

  it("displays alexs name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("Alex")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("Alex Kerr")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });
  
  it("displays chuhuis name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("ChuHui")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("ChuHui Fu")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });
  
  it("displays davids name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("David")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("David Hay")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });

  it("displays hermans name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("Herman")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("Herman Chiu")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });

  it("displays joels name and photo and title", () => {
    render(<ImageAvatars />);

    expect(screen.getByAltText("Joel")).toHaveAttribute("src", "alexkerr.jpg");
    expect(screen.getByText("Joel Reinecke")).toBeVisible();
    expect(screen.getByText("Engineer")).toBeVisible();
  });
});
