import React from "react";

function TaskDashboard({ tasks, onDeleteTask, onCompleteTask }) {
  return (
    <div className="task-dashboard">
      <h2>Task Dashboard</h2>

      {tasks.length === 0 ? (
        <p className="no-task">No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span>{task.name}</span>

              <div>
                <button onClick={() => onCompleteTask(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskDashboard;