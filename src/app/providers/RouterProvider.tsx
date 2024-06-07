import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import {
  MainPageRoute,
  NotFoundRoute,
  EmployeeReistrationRoute,
  EmployeeWorkdayRoute,
  OrderPageRoute,
  OrderSplitsPageRoute,
  UsersRegistrationPageRoute,
  LoginPageRoute,
  PassengersPageRoute,
  PassangerRegistrationPageRoute,
} from "~/pages";
import { GenericLayout, GuestLayout, NakedLayout } from "~/pages/layouts";
// import { AuthProvider } from "./AuthProvider";

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: (
          // <AuthProvider>
          <GenericLayout />
          // </AuthProvider>
        ),
        children: [
          MainPageRoute,
          EmployeeReistrationRoute,
          EmployeeWorkdayRoute,
          OrderPageRoute,
          OrderSplitsPageRoute,
          PassangerRegistrationPageRoute,
          UsersRegistrationPageRoute,
          PassengersPageRoute,
        ],
      },
      {
        element: <GuestLayout />,
        children: [LoginPageRoute],
      },
      {
        element: <NakedLayout />,
        children: [NotFoundRoute],
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
