
import { useNavigate } from "react-router-dom"
import "./Task.css"
const Task = ({ tasks, handleTaskClick, handleDeleteTask }) => {
    const navigate = useNavigate()
    const handleNavigate = (titleTask) => {
        navigate(`taskdetails/${titleTask}`)
    }
    return (
        <div>
            {tasks.map(task => (
                <li key={task.id}
                    role={"button"}
                    style={task.completed ? { borderLeft: "5px solid chartreuse" } : {}}
                    onClick={() => handleTaskClick(task.id)}
                    className='list-group-item list-group-item-action my-1 d-flex justify-content-between'>
                    {task.title}
                    <div className="buttons-container d-flex">
                        <button className="bg-body mx-1 border border-0"><i onClick={(e) => {
                            e.stopPropagation()
                            handleNavigate(task.title)
                        }} className="mx-1 fa-regular fa-pen-to-square " ></i></button>
                        <button className="bg-body mx-1 border border-0"><i onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteTask(task.id)
                        }
                        } className="mx-1 fa-regular fa-circle-xmark"></i></button>
                    </div>
                </li>

            ))}
        </div>
    )
}

export default Task