import React from 'react'

export default function Tasks({deleteTask, tasks}) {
  return (
    <div className="task-list">
    {tasks.map((task) => (
      <div key={task.id} className="task-item">
        <p>
          <strong>{task.name}</strong> - {task.date} - {task.status}
        </p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    ))}
  </div>
  )
}
