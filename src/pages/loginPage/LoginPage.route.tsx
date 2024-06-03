import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { LoginPage } from "./LoginPage";

export const LoginPageRoute: RouteObject = {
  path: pathKeys.login(),
  element: createElement(LoginPage),
};
