// import { useSuspenseQuery } from "@tanstack/react-query";
// import { IoCreateOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
// import { sessionQueries } from "~/entities/session";
import { pathKeys } from "~/shared/lib/react-router";

export function GenericLayout() {
  //   const { data } = useSuspenseQuery();

  return (
    <>
      {/* {data ? <UserNavigation /> : <GuestNavigation />} */}
      <UserNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function GuestLayout() {
  return (
    <>
      <GuestNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function NakedLayout() {
  return <Outlet />;
}

function UserNavigation() {
  //   const { data: user } = useSuspenseQuery();

  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to={pathKeys.home()}>Главный экран</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.employeeWorkday()}>
              Экран регистрации рабочего дня сотрудника
            </NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.login()}>Экран входа</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.order()}>Экран заявки</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.orders()}>Экран распределения заявок</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.page404()}>Страница не найдена</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.passangers()}>Экран пассажира</NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.registerEmployee()}>
              Экран регистрации сотрудников
            </NavLink>
          </li>
          <li>
            <NavLink to={pathKeys.registerUser()}>
              Экран регистрации пользователей программы
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function GuestNavigation() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to={pathKeys.home()}>Главная страница</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <span>Footer</span>
    </footer>
  );
}
