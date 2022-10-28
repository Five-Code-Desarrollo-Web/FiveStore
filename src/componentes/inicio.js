import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";

const Inicio = () => {

    let init = <div>
                    <h1> BIENVENIDO A FIVE STORE </h1>
                    <button onClick={vistaCliente} className="buttonInicio"> CLIENTE </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> ADMINISTRADOR </button>
                </div>

    let [estado, setEstado] = useState(init)

    function vistaCliente(){
        setEstado(estado = <Cliente />)
    }
    function vistaAdmin(){
        setEstado(estado = <Admin />)           
    }
    return(
        <div>
            {estado}
        </div> 
    )
}

export default Inicio