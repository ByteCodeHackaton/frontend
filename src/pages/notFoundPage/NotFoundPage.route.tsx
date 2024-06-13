import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { NotFoundPage } from "./NotFoundPage";

export const NotFoundRoute: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(NotFoundPage),
};
