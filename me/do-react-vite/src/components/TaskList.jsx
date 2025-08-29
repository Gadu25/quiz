function TaskList({tasks, deleteTask}) {
  return (
    <>
      {tasks.length === 0 && <p>No tasks available.</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>{task.name} - {task.description} - <button onClick={() => deleteTask(task.id)} className="button">Delete</button></li>
        ))}
      </ul>
    </>
  )
}

export default TaskList