import { TaskCard } from "./TaskCard";
import "./TaskColumn.css";

export const TaskColumn = ({ icon, columnName }) => {
  return (
    <section className="task_column">
      <h2 className="column_heading">
        <img className="task_icon" src={icon} />
        {columnName}
      </h2>
      <TaskCard />
    </section>
  );
};
