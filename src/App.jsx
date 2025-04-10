import { useState, useEffect } from 'react';
import Tasks from './components/tasks';
import './App.css';
import AddTask from './components/add-task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((err) => setError('Failed to fetch tasks'));
  }, []);


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
      .catch((err) => setError('Failed to add task'));
  };

  const deleteTask = (taskId) => {
    fetch(`http://127.0.0.1:8000/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((err) => setError('Failed to delete task'));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {error && <p className="error">{error}</p>}
      <AddTask addTask={addTask} />
      <h2>Tasks</h2>
      {tasks.length ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default App;
