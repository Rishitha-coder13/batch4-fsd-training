import React, { useState } from "react";
import "./App.css";

import AddTask from "./components/addtask";
import TaskDashboard from "./components/taskdashboard";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <AddTask onAddTask={addTask} />

      <TaskDashboard
        tasks={tasks}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
}

export default App;