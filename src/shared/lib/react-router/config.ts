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
  registerEmployee() {
    return pathKeys.root.concat('register-employee/');
  },
  employeeWorkday() {
    return pathKeys.root.concat('employee-day/');
  },
  order() {
    return pathKeys.root.concat('order/');
  },
  orders() {
    return pathKeys.root.concat('orders/');
  },
  passangers() {
    return pathKeys.root.concat('passangers/');
  },
  passanger() {
    return pathKeys.root.concat('passanger/');
  },
  registerUser() {
    return pathKeys.root.concat('register-user/');
  },
};