import React, { useState } from "react";

export default function AddTask({setTasks, tasks, setError}) {
  const [newTask, setNewTask] = useState({ name: "", date: "", status: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    fetch('http://127.0.0.1:8000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data.task]);
        setNewTask({ name: '', date: '', status: '' });
      })
      .catch(() => setError('Failed to add task'));
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
