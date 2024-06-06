// import { useSuspenseQuery } from "@tanstack/react-query";
// import { IoCreateOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
// import { sessionQueries } from "~/entities/session";
import { pathKeys } from "~/shared/lib/react-router";
import Logo from "~/shared/icons/mm-logo-red.svg?react";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
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
        <Center>
          <Flex wrap="wrap">
            <NavLink to={pathKeys.home()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Главная страница
              </Button>
            </NavLink>
            <NavLink to={pathKeys.employeeWorkday()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Регистрация рабочего дня сотрудника
              </Button>
            </NavLink>
            <NavLink to={pathKeys.order()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Регистрация заявки
              </Button>
            </NavLink>
            <NavLink to={pathKeys.orders()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Графики распределений заявок
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
                Регистрация пассажира
              </Button>
            </NavLink>
            <NavLink to={pathKeys.registerEmployee()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Регистрация сотрудника
              </Button>
            </NavLink>
            <NavLink to={pathKeys.registerUser()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Регистрация нового пользователя программы
              </Button>
            </NavLink>
          </Flex>
        </Center>
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
