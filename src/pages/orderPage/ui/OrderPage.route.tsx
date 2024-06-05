import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { OrderPage } from "./OrderPage";

export const OrderPageRoute: RouteObject = {
  path: pathKeys.order(),
  element: createElement(OrderPage),
};
