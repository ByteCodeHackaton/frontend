import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { MainPage } from "./MainPage";

export const MainPageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(MainPage),
};
