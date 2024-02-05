import Button from "./Button"
import Header from "./Header"

import { Link } from 'react-router-dom';


const TaskDetails = () => {
    return (
        <>
            <Header>Minhas tarefas</Header>

            <Link to={"/"}>
                <Button>Voltar</Button>
            </Link>

            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus dignissimos sit labore accusantium? Ipsam, velit.</p>
        </>
    )
}

export default TaskDetails