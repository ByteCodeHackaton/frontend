import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { PassangerPage } from "./PassangerPage";

export const PassangerPageRoute: RouteObject = {
  path: pathKeys.passanger(),
  element: createElement(PassangerPage),
};
