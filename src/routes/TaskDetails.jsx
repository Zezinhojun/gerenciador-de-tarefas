import { useNavigate } from "react-router-dom"
import Box from "../components/Box"
import Button from "../components/Button"
import Header from "../components/Header"

import { useParams } from "react-router-dom"


const TaskDetailsRoute = () => {
    const params = useParams()
    const navigate = useNavigate()

    const handleBackButtonClick = () => {
        navigate(-1)
    }

    return (
        <Box>
            <Header>Minhas Tarefas</Header>

            <div className="ms-3 mt-3">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="m-3 mt-3 pb-3 ps-3 bg-dark">
                <h2 className="text-success text-capitalize">{params.taskTitle}</h2>
                <p className="text-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus dignissimos sit labore accusantium? Ipsam, velit.</p>
            </div>
        </Box>
    )
}

export default TaskDetailsRoute