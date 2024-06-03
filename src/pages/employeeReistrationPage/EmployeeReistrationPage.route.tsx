import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { EmployeeReistrationPage } from "./EmployeeReistrationPage";

export const EmployeeReistrationRoute: RouteObject = {
  path: pathKeys.registerEmployee(),
  element: createElement(EmployeeReistrationPage),
};
