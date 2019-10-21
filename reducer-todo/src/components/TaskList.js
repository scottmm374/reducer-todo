import React from "react";

function TaskList({ task, toggleComplete }) {
  console.log("task", task);

  return (
    <div>
      <ul>
        {task.map(task => (
          <li key={task.id}>
            <input
              className="input-check"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task)}
            />
            <label className={task.completed ? "completed" : null}>
              {task.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
