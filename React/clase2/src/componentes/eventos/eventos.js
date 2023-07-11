import React, { Component } from 'react'
import './eventos.css';
 
function activarMensaje(e) {
    e.preventDefault();
    alert("Botón presionado");
}

export default class eventos extends Component {
  render() {
    return (
      <div>
        <h1>Ejemplo de eventos de react</h1>
        <button onClick={activarMensaje}>Activar</button>
      </div>
    )
  }
}
