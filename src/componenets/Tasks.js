import PropTypes from "prop-types"
import Task from "./Task"

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleReminder} />
            ))}
        </>
    )
}

Tasks.propTypes = {
    deleteTask: PropTypes.func.isRequired 
}

export default Tasks
