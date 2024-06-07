import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { PassengerPage } from "./passangerPage";

export const PassengerPageRoute: RouteObject = {
  path: pathKeys.passenger(),
  children: [
    {
      path: ":id",
      element: createElement(PassengerPage),
    },
  ],
};
