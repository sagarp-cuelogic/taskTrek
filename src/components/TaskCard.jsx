import { Tag } from "./Tag";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

export const TaskCard = () => {
  return (
    <div className="task_card">
      <p className="task_title">Sample Title</p>
      <div className="task_footer">
        <div className="tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="delete">
          <img src={deleteIcon} className="delete_icon" alt="Delete task" />
        </div>
      </div>
    </div>
  );
};
