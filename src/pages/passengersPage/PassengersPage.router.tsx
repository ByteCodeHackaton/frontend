import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { PassengersPage } from "./PassengersPage";

export const PassengersPageRoute: RouteObject = {
  path: pathKeys.passengers(),
  element: createElement(PassengersPage),
};
