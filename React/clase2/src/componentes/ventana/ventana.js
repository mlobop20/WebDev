
import React from 'react';
import Saludo from '../saludo/saludo';
import './ventana.css';

function Aviso(props) {
    if (!props.advertencia) {
      return null;
    }
    return (
      <div>
        Cuidado!
      </div>
    );
  }

class Ventana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mostrar: true};
        this.ejecutarCambioClick = this.ejecutarCambioClick.bind(this);
      }
      ejecutarCambioClick() {
        this.setState(state => ({
          mostrar: !state.mostrar
        }));
      }
      render() {
        return (
          <div>
            <Aviso advertencia={this.state.mostrar} />
            <button onClick={this.ejecutarCambioClick}>
              {this.state.mostrar ? 'Ocultar Aviso' : 'Mostrar Aviso'}
            </button>
          </div>
        );
      }
}

export default Ventana;