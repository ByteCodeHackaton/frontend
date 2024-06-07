import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { PassangerPage } from "./PassangerPage";

export const PassangerRegistrationPageRoute: RouteObject = {
  path: pathKeys.registerPassenger(),
  element: createElement(PassangerPage),
};
