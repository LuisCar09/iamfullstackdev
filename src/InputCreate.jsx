// - Crea un componente llamado `InputCreate.jsx` donde crearás un `input` y un `botón`
// - La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React
// - Una vez creado el módulo lo importaremos a `App.jsx` y le añadiremos a la ruta `/create`
import axios from "axios"
import { useEffect,useState } from "react"
const InputCreate = ({needToReload}) => {
    const urlApi = 'http://localhost:8080'
    const [inputValue,setInputValue] = useState('')
    
    
    const createTask = async () => {
        try {
            
            
            const response = await axios.post(`${urlApi}/create`,{title:inputValue})
            console.log(response);
            needToReload(prevValue => !prevValue)
        } catch (error) {
            console.log(error.message);
            
        }
    }
   
    return(
        <>
            <label htmlFor="inputTask" ></label>
            <input id="inputTask" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} ></input>
            <button onClick={createTask} type="button" >Create Task</button>
        </>
    )
}


export default InputCreate