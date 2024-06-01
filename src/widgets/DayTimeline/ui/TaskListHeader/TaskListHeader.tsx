import cls from "./TaskListHeader.module.scss";

interface ITaskListHeader {
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}

export const TaskListHeader: React.FC<ITaskListHeader> = () => {
  return (
    <div className={cls._1nBOt}>
      <div className={cls._WuQ0f}>2242</div>
      <div className={cls._WuQ0f}>123</div>
      <div className={cls._WuQ0f}>321</div>
    </div>
  );
};
