import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { UsersRegistrationPage } from "./UsersRegistrationPage";

export const UsersRegistrationPageRoute: RouteObject = {
  path: pathKeys.registerUser(),
  element: createElement(UsersRegistrationPage),
};
