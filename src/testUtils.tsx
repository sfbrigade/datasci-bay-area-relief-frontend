import React from "react";
import {act, render, RenderResult} from "@testing-library/react";
import {createMemoryHistory, MemoryHistory} from "history";
import {Router} from "react-router-dom";

export const idleForIO = async (): Promise<void> => {
  await act(async () => {
    await new Promise((resolve) => resolve());
  });
};

export type RenderResultWithHistory = RenderResult & {history: MemoryHistory};
type RenderWithRouterFunction = (
  ui: React.ReactElement,
  routeOptions?: {path?: string; history?: MemoryHistory}
) => RenderResultWithHistory;

export const renderWithRouter: RenderWithRouterFunction = (
  ui,
  {path = "/", history = createMemoryHistory({initialEntries: [path]})} = {}
) => {
  const Wrapper: React.FC = ({children}) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, {wrapper: Wrapper}),
    history,
  };
};
