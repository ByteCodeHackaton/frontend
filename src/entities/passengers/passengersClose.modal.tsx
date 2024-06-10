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
import { SlTrash } from "react-icons/sl";
import { useDeletePassengerMutation } from "./passengers.api";
import { Detail } from "./types";

interface PassengersCloseModalProps {
  options: Detail;
}

const PassengersDeleteModal: FC<PassengersCloseModalProps> = ({ options }) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [sendRequest, { data, isSuccess, isError }] =
    useDeletePassengerMutation();

  const toast = useToast();

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Пассажир удален",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка при удалении пассажира",
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

export { PassengersDeleteModal };
