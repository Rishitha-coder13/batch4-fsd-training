import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    onAddTask(task);
    setTask("");
  };

  return (
    <div className="add-task">
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;