import React from "react";

//import "./Saludar.css"
import "./Saludar.scss"
import estilos from '../../css/Boton.module.css'

export default function Saludar(props) {

    const {nombre, apellidos} = props

    return (
        <div className="saludar">
            <p className="nombre">
                Hola {nombre} {apellidos} como estas?
            </p>
            <p className="creditos">Creditos....</p>

            <button className={estilos.botonError}>Error</button>
            <button className={estilos.botonExito}>Correcto</button>

        </div>
    )
}
