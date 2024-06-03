import { RouteObject } from "react-router-dom";
import { pathKeys } from "~/shared/lib/react-router";
import { createElement } from "react";
import { OrderSplitsPage } from "./OrderSplitsPage";

export const OrderSplitsPageRoute: RouteObject = {
  path: pathKeys.orders(),
  element: createElement(OrderSplitsPage),
};
