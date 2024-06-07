// import { SlugPageParams, UsernamePageParams } from './react-router.types';

export const pathKeys = {
  root: '/',
  login() {
    return pathKeys.root.concat('login/');
  },
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
  employeeWorkday() {
    return pathKeys.root.concat('employee-day/');
  },
  employees() {
    return pathKeys.root.concat('employees/');
  },
  order() {
    return pathKeys.root.concat('order/');
  },
  orders() {
    return pathKeys.root.concat('orders/');
  },
  passengers() {
    return pathKeys.root.concat('passengers/');
  },
  passenger() {
    return pathKeys.root.concat('passengers/');
  },
  passengerById( id : string) {
      return pathKeys.passenger().concat(id, '/');
  },
  registerUser() {
    return pathKeys.root.concat('register-user/');
  },
  registerEmployee() {
    return pathKeys.root.concat('register-employee/');
  },
  registerPassenger() {
    return pathKeys.root.concat('register-passenger/');
  },
};