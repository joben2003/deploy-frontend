import React, { useState } from "react";

export default function AddTask({addTask}) {
  const [newTask, setNewTask] = useState({ name: "", date: "", status: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };
  return (
    <div className="task-form">
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={newTask.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="date"
        placeholder="Task Date"
        value={newTask.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Task Status"
        value={newTask.status}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
