import React, { useState } from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from '../archivo.json'

function Cliente(){
    const volver = () => {
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setVisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setVisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function visualizacion(){
        setInicio(inicio="")
        setVisualizar(visualizar=datos)
        setModificar(modificar="")
    }

    function modificacion () {
        let mod =
        <div>
            <div> <label className="label "> Producto </label> <input type="text"></input> </div>
            <div> <label className="label"> Descripción </label> <input type="text"></input> </div>
            <div> <label className="label"> Marca </label> <input type="text"></input> </div>
            <button> Guardar </button>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setVisualizar(visualizar=[])
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://us.123rf.com/450wm/strangelet/strangelet1911/strangelet191100396/137050449-arte-conceptual-de-comentarios-de-los-clientes-muchas-personas-tienen-estrellas-de-calificaci%C3%B3n-amar.jpg?ver=6"></img>

    let [barra, setBarra] = useState(init)
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setVisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div>
            {barra}
            {inicio}
            {visualizar.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>
                        <strong> Objeto {idx+1} : </strong> {elem.producto + " " + elem.descripción + " " + elem.marca}
                    </div>
                )
            })}
            {modificar}
        </div>
    )

}
export default Cliente 