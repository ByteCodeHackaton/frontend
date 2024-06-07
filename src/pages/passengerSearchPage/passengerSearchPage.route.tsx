import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { PassengerSearchPage } from "./passengerSearchPage";

export const PassengerSearchPageRoute: RouteObject = {
  path: pathKeys.passengerSearch(),
  element: createElement(PassengerSearchPage),
};
