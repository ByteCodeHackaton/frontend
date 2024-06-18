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
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { SlTrash } from "react-icons/sl";
import { Detail as IDetail } from "../employees/employees.types";
import { Detail as DetailProps } from "./orders.types";
import { useLazySetActiveQuery } from "./orders.api";
import { useGetEmployeesQuery } from "../employees/employees.api";
import { useGetStationsQuery } from "~/shared/api/subway.api";

interface OrdersCloseModalProps {
  options: DetailProps;
}

const OrdersActiveModal: FC<OrdersCloseModalProps> = ({ options }) => {
  const {
    isOpen: isOpenActive,
    onOpen: onOpenActive,
    onClose: onCloseActive,
  } = useDisclosure();

  const { data: dataEmployees } = useGetEmployeesQuery({
    limit: 5,
    off: 0,
  });
  const [sendRequest, { data, isSuccess, isError }] = useLazySetActiveQuery();
  const {
    data: dataStations,
    isLoading: isLoadingStations,
    isSuccess: isSuccessStations,
    isError: isErrorStations,
  } = useGetStationsQuery();

  const [emp, setEmp] = useState<IDetail>();

  const toast = useToast();

  useEffect(() => {
    if (isSuccess)
      toast({
        title: "Успешно",
        status: "success",
        isClosable: true,
      });
    if (isError)
      toast({
        title: "Ошибка",
        status: "error",
        isClosable: true,
      });
  }, [isSuccess, isError]);

  return (
    <>
      <Button onClick={onOpenActive}>Добавить сотрудника к заявке</Button>
      <Modal onClose={onCloseActive} size="md" isOpen={isOpenActive}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Выберите сотрудника</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select>
              {dataEmployees &&
                dataEmployees.document.details.map((obj) => (
                  <option value={obj.fio} onClick={() => setEmp(obj)}>
                    {obj.fio}
                  </option>
                ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                sendRequest({
                  fio: "",
                  id: emp?.id || dataEmployees?.document.details[0].id || "",
                  employees_count:
                    Number(options.insp_sex_f) + Number(options.insp_sex_m),
                  note: "",
                  path_from:
                    dataStations?.responseObject[Math.floor(Math.random() * 5)]
                      .node_id,
                  path_to:
                    dataStations?.responseObject[Math.floor(Math.random() * 6)]
                      .node_id,
                  request_date: String(new Date().toISOString().split(".")[0]),
                });
                onCloseActive();
              }}
            >
              Добавить к заявке
            </Button>
            <Button variant="ghost" onClick={onCloseActive}>
              Отмена
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { OrdersActiveModal };
