import React from "react";

export default function Saludar(props) {

    const {nombre = "Anonimo", apellidos = "Sin Apellidos", /*enviarSaludo*/} = props;
    const nombreCompleto = `Hola ${nombre} ${apellidos} como estas?`;

    return (
        <div>
            <p>
                {nombreCompleto}
                { /*enviarSaludo && (
                    <button onClick={() => enviarSaludo(nombre)}>Enviar Saludo.</button>
                )*/}

            </p>
        </div>
    )
}

//export default Saludar
