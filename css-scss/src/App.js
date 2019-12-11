import React from 'react';
import Saludar from "./ componentes/Saludar/Saludar";

import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Mi primer componente</h1>
            <h2 className="nombre">Hola mundo</h2>
            <Saludar nombre="Agustin" apellidos="Navarro Galdon"/>
      </div>
  );
}

export default App;
