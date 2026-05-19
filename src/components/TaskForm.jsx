import { useState } from "react";
import "./TaskForm.css";
import { Tag } from "./Tag";

export const TaskForm = () => {
  const [taskData, setTaskData] = useState({});

  return (
    <header className="app_header">
      <form>
        <input className="task_input" type="text" name="task" />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select name="status" className="task_status">
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
