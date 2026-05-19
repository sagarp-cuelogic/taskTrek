import { useState } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskColumn } from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import InProgress from "./assets/fire.png";
import Done from "./assets/check-mark-button.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn icon={Todo} columnName="To Do" />
        <TaskColumn icon={InProgress} columnName="In Progress" />
        <TaskColumn icon={Done} columnName="Done" />
      </main>
    </div>
  );
}

export default App;
