import { useState } from "react"
import Header from "./componenets/Header"
import Tasks from "./componenets/Tasks"
import AddTask from "./componenets/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Oh my!",
      day: "Feb 6, 1975 at 10:30 AM"
    }
  ]);

  const [showAddTask, setShowAddTask] = useState(false)

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id !== id ? task : {...task, reminder: !task.reminder}))
  }

  const addTask = (task) => {
    setTasks([...tasks, task])
    setShowAddTask(false)
  }

  const onToggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header onToggle={onToggleAddTask} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
