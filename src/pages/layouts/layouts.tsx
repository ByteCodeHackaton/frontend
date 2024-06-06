// import { useSuspenseQuery } from "@tanstack/react-query";
// import { IoCreateOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
// import { sessionQueries } from "~/entities/session";
import { pathKeys } from "~/shared/lib/react-router";
import Logo from "~/shared/icons/mm-logo-red.svg?react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Door from "~/shared/icons/door.svg?react";

export function GenericLayout() {
  //   const { data } = useSuspenseQuery();

  return (
    <Flex direction="column" height="100%">
      {/* {data ? <UserNavigation /> : <GuestNavigation />} */}
      <UserNavigation />
      <Outlet />
    </Flex>
  );
}

export function GuestLayout() {
  return (
    <>
      <GuestNavigation />
      <Outlet />
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
      <Box>
        <Flex maxW="960px" mx="auto" justify="space-between" align="center">
          <NavLink to={pathKeys.home()}>
            <Logo width="221" height={80} />
          </NavLink>
          <NavLink to={pathKeys.login()}>
            <Button colorScheme="red" rightIcon={<Door color="#fff" />}>
              Войти
            </Button>
          </NavLink>
        </Flex>
        <Flex wrap="wrap">
          <NavLink to={pathKeys.home()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Главный экран
            </Button>
          </NavLink>
          <NavLink to={pathKeys.employeeWorkday()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран регистрации рабочего дня сотрудника
            </Button>
          </NavLink>
          <NavLink to={pathKeys.order()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран заявки
            </Button>
          </NavLink>
          <NavLink to={pathKeys.orders()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран распределения заявок
            </Button>
          </NavLink>
          {/* <NavLink to={pathKeys.page404()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Страница не найдена
            </Button>
          </NavLink> */}
          <NavLink to={pathKeys.passanger()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран пассажира
            </Button>
          </NavLink>
          <NavLink to={pathKeys.registerEmployee()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран регистрации сотрудников
            </Button>
          </NavLink>
          <NavLink to={pathKeys.registerUser()}>
            <Button
              textColor="black"
              backgroundColor="transparent"
              _hover={{ textColor: "red" }}
            >
              Экран регистрации пользователей программы
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </nav>
  );
}

function GuestNavigation() {
  return (
    <nav>
      <Box>
        <Flex maxW="960px" mx="auto" justify="space-between" align="center">
          <NavLink to={pathKeys.home()}>
            <Logo width="221" height={80} />
          </NavLink>
          <NavLink to={pathKeys.login()}>
            <Button colorScheme="red" rightIcon={<Door color="#fff" />}>
              Войти
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </nav>
  );
}
