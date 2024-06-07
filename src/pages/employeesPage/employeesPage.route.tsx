import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { EmployeesPage } from "./employeesPage";

export const EmployeesPageRoute: RouteObject = {
  path: pathKeys.employees(),
  element: createElement(EmployeesPage),
};
