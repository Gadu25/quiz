import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const addTask = (task) => {
    //assigning of id
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    task.id = newId;

    setTasks([...tasks, task]);
  }

  return (
    <>
      <h1>Do React</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
      <hr />
      <TaskForm addTask={addTask} />
    </>
  )
}

export default App
