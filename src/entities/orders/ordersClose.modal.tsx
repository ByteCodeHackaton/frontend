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
import { useDeleteOrderMutation } from "./orders.api";
import { Detail } from "./orders.types";

interface OrdersCloseModalProps {
  options: Detail;
}

const OrdersDeleteModal: FC<OrdersCloseModalProps> = ({ options }) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [sendRequest, { data, isSuccess, isError }] = useDeleteOrderMutation();

  const toast = useToast();

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Заявка удалена",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка при удалении заявки",
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
            <Text>Вы уверены, что хотите удалить заявку №{options.id}?</Text>
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

export { OrdersDeleteModal };
