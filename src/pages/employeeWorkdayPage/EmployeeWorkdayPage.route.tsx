import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { EmployeeWorkdayPage } from "./EmployeeWorkdayPage";

export const EmployeeWorkdayRoute: RouteObject = {
  path: pathKeys.employeeWorkday(),
  element: createElement(EmployeeWorkdayPage),
};
