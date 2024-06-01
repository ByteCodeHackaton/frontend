import { Task } from "gantt-task-react";
import { Row } from "../../../../shared/Row/Row";
import { Col } from "../../../../shared/Column/Col";

interface ITaskListColumn {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
}

export const TaskListColumn: React.FC<ITaskListColumn> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((item) => {
        return (
          <div className="_1nBOt">
            <div className="_WuQ0f">{item.name}</div>
            <div className="_WuQ0f">123</div>
            <div className="_WuQ0f">321</div>
          </div>
        );
      })}
    </div>
  );
};
