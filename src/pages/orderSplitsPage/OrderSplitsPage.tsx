import { Center, Spinner, Text } from "@chakra-ui/react";
import { Gantt, ViewMode } from "gantt-task-react";
import { FC, useEffect, useState } from "react";
import { useGetActiveQuery } from "~/entities/orders/orders.api";
import { getRandomColor } from "~/widgets/DayTimeline/lib/getRandomColour";
import "gantt-task-react/dist/index.css";
import { useGetStationsQuery } from "~/shared/api/subway.api";

interface OrderSplitsPageProps {
  className?: string;
}

const OrderSplitsPage: FC<OrderSplitsPageProps> = () => {
  const { data, isLoading, isSuccess } = useGetActiveQuery();
  const {
    data: dataStations,
    isLoading: isLoadingStations,
    isSuccess: isSuccessStations,
    isError: isErrorStations,
  } = useGetStationsQuery();

  return (
    <Center>
      {isSuccess ? (
        <Gantt
          tasks={
            data?.responseObject != null
              ? data?.responseObject.map((task) => ({
                  start: new Date(
                    task.start_work
                    // task.start_work.slice(6, 10) +
                    //   "-" +
                    //   task.start_work.slice(3, 5) +
                    //   "-" +
                    //   task.start_work.slice(0, 2) +
                    //   task.start_work.slice(10)
                  ),
                  end: new Date(
                    task.start_work
                    // task.start_work.slice(6, 10) +
                    //   "-" +
                    //   task.start_work.slice(3, 5) +
                    //   "-" +
                    //   task.start_work.slice(0, 2) +
                    //   task.start_work.slice(10)
                  ),
                  name: `${
                    dataStations?.responseObject.find(
                      (e) => e.node_id === task.path_from
                    )?.station_name
                  }-${
                    dataStations?.responseObject.find(
                      (e) => e.node_id === task.path_to
                    )?.station_name
                  }`,
                  id: String(task.id),
                  type: "task",
                  progress: 0,
                  isDisabled: true,
                  styles: {
                    progressColor: getRandomColor(),
                    progressSelectedColor: getRandomColor(),
                  },
                }))
              : []
          }
          viewMode={ViewMode.Hour}
          locale="rus"
        />
      ) : (
        <Spinner colorScheme="red" />
      )}
    </Center>
  );
};

export { OrderSplitsPage };
