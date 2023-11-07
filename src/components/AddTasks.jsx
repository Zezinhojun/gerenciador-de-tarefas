import { useState } from "react"
import Button from "./Button"
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    inputData: Yup.string().required("Campo obrigatório"),
});

const AddTasks = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
    const handleAddInputData = () => {
        validationSchema
            .validate({ inputData })
            .then(() => {
                handleTaskAddition(inputData);
                setInputData("");
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="box-input d-flex flex-row mt-3 mx-3">
            <input onChange={handleInputChange} type="text" className="form-control me-4" value={inputData} required />
            <Button onClick={handleAddInputData} >Adicionar</Button>

        </div>
    )
}

export default AddTasks