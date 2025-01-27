import React from "react";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "Mark Pending" : "Mark Completed"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
