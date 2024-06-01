import React, { FC, useEffect, useState } from "react";
import styles from "./DayTimeline.module.scss";
import { IData } from "../types/data";
import { getRandomColor } from "../lib/getRandomColour";
import { DATA_VAR } from "../../../shared/data";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { TaskListHeader } from "./TaskListHeader/TaskListHeader";
import { TaskListColumn } from "./TaskListColumn/TaskListColumn";

interface IDayTimeline {
  className?: string;
}

const tasks: Task[] = DATA_VAR.document.order.map((item) => ({
  start: new Date(item.startTime),
  end: new Date(item.endTime),
  name: `${item.stationstart}-${item.stationend}`,
  id: String(item.number),
  type: "task",
  progress: 0,
  isDisabled: true,
  styles: {
    progressColor: getRandomColor(),
    progressSelectedColor: getRandomColor(),
  },
}));

const DayTimeline: FC<IDayTimeline> = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);

  // useEffect(() => {
  //   const source = new EventSource(`http://localhost:5000/sse`);

  //   source.addEventListener("open", () => {
  //     console.log("SSE opened!");
  //   });

  //   source.addEventListener("message", (e) => {
  //     const data = JSON.parse(e.data) as IData;
  //     console.log(data);

  //     setTasks(
  //       data.document.order.map((item) => ({
  //         start: new Date(item.startTime),
  //         end: new Date(item.endTime),
  //         name: `${item.stationstart}-${item.stationend}`,
  //         id: String(item.number),
  //         type: "task",
  //         progress: 0,
  //         isDisabled: true,
  //         styles: {
  //           progressColor: getRandomColor(),
  //           progressSelectedColor: getRandomColor(),
  //         },
  //       }))
  //     );
  //   });

  //   source.addEventListener("error", (e) => {
  //     console.error("Error: ", e);
  //   });

  //   return () => {
  //     source.close();
  //   };
  // }, []);

  return tasks.length != 0 ? (
    // <Gantt tasks={tasks} viewMode={ViewMode.Hour} />
    <Gantt
      tasks={tasks}
      viewMode={ViewMode.Hour}
      TaskListHeader={TaskListHeader}
      TaskListTable={TaskListColumn}
    />
  ) : (
    <>No data</>
  );
};

export { DayTimeline };
