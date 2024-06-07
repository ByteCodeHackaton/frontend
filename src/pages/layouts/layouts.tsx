// import { useSuspenseQuery } from "@tanstack/react-query";
// import { IoCreateOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
// import { sessionQueries } from "~/entities/session";
import { pathKeys } from "~/shared/lib/react-router";
import Logo from "~/shared/icons/mm-logo-red.svg?react";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
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
          <Flex wrap="wrap" gap={10}>
            <NavLink to={pathKeys.home()}>
              <Button
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
                fontWeight={200}
                p={0}
              >
                <Text>Главная страница</Text>
              </Button>
            </NavLink>
            <Menu isLazy>
              <MenuButton
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Пассажиры
              </MenuButton>
              <MenuList>
                <NavLink to={pathKeys.registerPassenger()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Регистрация пассажира
                  </MenuItem>
                </NavLink>
                <NavLink to={pathKeys.passengers()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Список пассажиров
                  </MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Сотрудники
              </MenuButton>
              <MenuList>
                <NavLink to={pathKeys.employeeWorkday()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Регистрация рабочего дня сотрудника
                  </MenuItem>
                </NavLink>
                <NavLink to={pathKeys.registerEmployee()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Регистрация сотрудника
                  </MenuItem>
                </NavLink>
                <NavLink to={pathKeys.employees()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Список сотрудников
                  </MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Заявки
              </MenuButton>
              <MenuList>
                <NavLink to={pathKeys.order()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Регистрация заявки
                  </MenuItem>
                </NavLink>
                <NavLink to={pathKeys.orders()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Графики распределений заявок
                  </MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton
                textColor="black"
                backgroundColor="transparent"
                _hover={{ textColor: "red" }}
              >
                Пользователи
              </MenuButton>
              <MenuList>
                <NavLink to={pathKeys.registerUser()}>
                  <MenuItem
                    textColor="black"
                    backgroundColor="transparent"
                    _hover={{ textColor: "red" }}
                  >
                    Регистрация нового пользователя программы
                  </MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
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
