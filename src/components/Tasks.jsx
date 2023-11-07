import Task from "./Task"

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
    return (
        <div className="lista">
            <ul className="list-group mx-3 my-3 col">
                <Task

                    handleTaskClick={handleTaskClick}
                    tasks={tasks}
                    handleDeleteTask={handleDeleteTask} />
            </ul>

        </div>
    )
}

export default Tasks