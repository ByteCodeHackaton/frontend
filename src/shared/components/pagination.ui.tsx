import {
  Button,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { SlArrowLeft, SlArrowRight, SlArrowUp } from "react-icons/sl";

interface PaginationProps {
  limit: number;
  off: number;
  setLimit: (value: number) => void;
  setOff: (value: number) => void;
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  //   records: number;
}

const Pagination: FC<PaginationProps> = ({
  limit,
  off,
  setLimit,
  setOff,
  pages,
  currentPage,
  setCurrentPage,
}) => {
  const handlerFirstPage = () => {
    setCurrentPage(1);
    setOff(0);
  };
  const handlerLastPage = () => {
    setCurrentPage(pages);
    setOff(limit * (pages - 1));
  };
  const handlerNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setOff((prev) => prev + limit);
  };
  const handlerPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setOff((prev) => prev - limit);
  };

  return (
    <HStack mt={8}>
      <Text>Показать записей</Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={SlArrowUp} />}>
          {limit}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              setLimit(10);
              setOff(0);
            }}
          >
            10
          </MenuItem>
          <MenuItem
            onClick={() => {
              setLimit(20);
              setOff(0);
            }}
          >
            20
          </MenuItem>
          <MenuItem
            onClick={() => {
              setLimit(50);
              setOff(0);
            }}
          >
            50
          </MenuItem>
          <MenuItem
            onClick={() => {
              setLimit(100);
              setOff(0);
            }}
          >
            100
          </MenuItem>
        </MenuList>
      </Menu>
      {currentPage != 1 && (
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="First page"
          fontSize="20px"
          icon={<Icon as={SlArrowLeft} />}
          onClick={handlerPrevPage}
        />
      )}

      {currentPage != 1 && <Button onClick={handlerFirstPage}>{1}</Button>}

      {currentPage > 3 && <Text>...</Text>}
      {currentPage > 2 && (
        <Button onClick={handlerPrevPage}>{currentPage - 1}</Button>
      )}
      <Button colorScheme="red">{currentPage}</Button>
      {currentPage + 1 < pages && (
        <Button onClick={handlerNextPage}>{currentPage + 1}</Button>
      )}
      {currentPage + 2 < pages && <Text>...</Text>}
      {currentPage < pages && (
        <Button onClick={handlerLastPage}>{pages}</Button>
      )}

      {currentPage < pages && (
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="First page"
          fontSize="20px"
          icon={<Icon as={SlArrowRight} />}
          onClick={handlerNextPage}
        />
      )}
    </HStack>
  );
};

export { Pagination };
