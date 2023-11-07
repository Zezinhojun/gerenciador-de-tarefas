import { useState, useEffect } from "react"
import AddTasks from "../components/AddTasks"
import Box from "../components/Box"
import Header from "../components/Header"
import Tasks from "../components/Tasks"
import axios from "axios"

import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTasks(data)
        }
        fetchTasks()
    }, [])

    const handleTaskClick = (taskId) => {
        const newTask = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed }
            return task
        })
        setTasks(newTask)
    }

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            id: uuidv4(),
            title: taskTitle,
            completed: false
        }]
        setTasks(newTask)
    }

    const handleDeleteTask = (taskId) => {
        const newTask = tasks.filter(task => task.id !== taskId)
        setTasks(newTask)
    }
    return (
        <>
            <Box>
                <Header>Minhas Tarefas</Header>
                <AddTasks
                    handleTaskAddition={handleTaskAddition} />
                <Tasks
                    handleTaskClick={handleTaskClick}
                    tasks={tasks}
                    handleDeleteTask={handleDeleteTask} />
            </Box>

        </>
    );
}

export default Home