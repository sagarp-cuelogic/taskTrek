import { useState } from "react";
import "./TaskForm.css";
import { Tag } from "./Tag";

export const TaskForm = () => {
  // const [task, setTask] = useState("");
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const [status, setStatus] = useState("todo");
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(task, status);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleTag = (tag) => {
    if (taskData.tags.some((i) => i === tag)) {
      const filteredTags = taskData.tags.filter((i) => i !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  console.log(taskData.tags);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          className="task_input"
          type="text"
          name="task"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="HTML" handleTag={handleTag} />
            <Tag tagName="CSS" handleTag={handleTag} />
            <Tag tagName="JavaScript" handleTag={handleTag} />
            <Tag tagName="React" handleTag={handleTag} />
          </div>
          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
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
