import { useState } from "react"

function TaskForm({addTask}) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    isDone: false
  });

  const submit = () => {
    // adding task
    addTask(task);

    // reset form
    setTask({
      name: "",
      description: ""
    });
  }

  return (
    <>
      <p>Task Form Component</p>
      <input className="input" type="text" placeholder="New Task" value={task.name} onChange={(e) => setTask({...task, name: e.target.value})}/>
      <textarea placeholder="Task description" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})}></textarea>
      <button onClick={() => {submit()}}>Add Task</button>
    </>
  )
}

export default TaskForm
