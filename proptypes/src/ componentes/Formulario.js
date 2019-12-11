import React from "react";


export default function Formulario(props) {

    return (
        <form>
            <FormCampo
                titulo="Correo"
                nombre="correo"
                tipo="email"
                marcador="Escribe tu correo"
            />
            <FormCampo
                titulo="Contraseña"
                nombre="contraseña"
                tipo="password"
                marcador="Escribe tu contraseña"
            />
            <br/>
            <FormBoton/>
        </form>
    )

}

export function FormCampo(props) {

    const {titulo, nombre, tipo, marcador} = props

    return (
        <div>
            <label>{titulo}</label>
            <input name={nombre} type={tipo} placeholder={marcador}/>
        </div>
    )
}

function FormBoton() {
    return 'Soy un boton'
}
