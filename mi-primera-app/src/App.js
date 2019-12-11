import React from 'react';
import Saludar from "./componentes/Saludar";

import './App.css';

function App() {

    const enviarSaludo = nombre => {
        console.log('Hola ' + nombre)
    }

  return (
      <div className="App">
          <h1>Mi primer componente</h1>
          <Saludar
              nombre="Agustin"
              apellidos="Navarro Galdon"
              enviarSaludo={enviarSaludo}
          />

          <Saludar
              nombre="Carlos"
              apellidos="Garcia"
              enviarSaludo={enviarSaludo}
          />
      </div>
  );
}

export default App;
