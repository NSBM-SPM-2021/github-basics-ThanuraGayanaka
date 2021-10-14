import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, onAdd }) => {

    return (
       <>
       {tasks.map((task) => (
           <Task key={task.id} task={task}/>
       ))}
       </>
    )
}

export default Tasks
