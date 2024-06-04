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
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.home()}>Главный экран</NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.employeeWorkday()}>
              Экран регистрации рабочего дня сотрудника
            </NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          ></Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.order()}>Экран заявки</NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.orders()}>Экран распределения заявок</NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.page404()}>Страница не найдена</NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.passangers()}>Экран пассажира</NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.registerEmployee()}>
              Экран регистрации сотрудников
            </NavLink>
          </Button>
          <Button
            textColor="black"
            backgroundColor="transparent"
            _hover={{ textColor: "red" }}
          >
            <NavLink to={pathKeys.registerUser()}>
              Экран регистрации пользователей программы
            </NavLink>
          </Button>
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
