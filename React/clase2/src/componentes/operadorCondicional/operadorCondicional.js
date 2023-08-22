
import React from 'react';
import Saludo from '../saludo/saludo';
import './operadorCondicional.css';

class OperadorCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {estaAutenticado: true};
  }
   render() {
    const estaAutenticado = this.state.estaAutenticado;
    return (
    <div>
      <h1>Expresión Pequeña</h1>
      Usuario <b>{estaAutenticado ? 'actualmente' : 'no'}</b> autenticado! 
      <h1>Expresión Grande</h1>
      {estaAutenticado ? (
        <Saludo estaAutenticado={true} nombre="José" />
      ) : (
        <Saludo estaAutenticado={false} nombre="José" />
      )}
      
    </div>
  );
 }
}

export default OperadorCondicional;