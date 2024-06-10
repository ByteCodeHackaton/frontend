import {
  Button,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { EmployeesForm } from "./employeesForm";
import { SlTrash } from "react-icons/sl";
import { useDeleteEmployeeMutation } from "./employees.api";

interface EmployeesCloseModalProps {
  options: {
    date: string;
    time_work: string;
    id: string;
    fio: string;
    uchastok: string;
    smena: string;
    rank: string;
    sex: string;
    phone_work: string;
    phone_personal: string;
    tab_number: string;
    type_work: string;
  };
}

const EmployeesDeleteModal: FC<EmployeesCloseModalProps> = ({ options }) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [sendRequest, { data, isSuccess, isError }] =
    useDeleteEmployeeMutation();

  const toast = useToast();

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Сотрудник удален",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка при удалении сотрудника",
        status: "error",
        isClosable: true,
      });
  }, [isSuccess, isError]);

  return (
    <>
      <IconButton
        aria-label="Open delete modal"
        icon={<Icon as={SlTrash} color="white" h={8} w={8} />}
        colorScheme="red"
        onClick={onOpenDelete}
      />
      <Modal onClose={onCloseDelete} size="md" isOpen={isOpenDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Подтвердите действие</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Вы уверены, что хотите удалить сотрудника {options.fio}?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                sendRequest({ id: options.id });
                onCloseDelete();
              }}
            >
              Удалить
            </Button>
            <Button variant="ghost" onClick={onCloseDelete}>
              Отмена
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { EmployeesDeleteModal };
