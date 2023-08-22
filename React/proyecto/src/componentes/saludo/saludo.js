import './saludo.css';
import React, { Component } from 'react';

export default class SaludoSegunHora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saludo: '',
    };
  }

  componentDidMount() {
    this.obtenerSaludo();
  }

  obtenerSaludo = () => {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
      this.setState({ saludo: '¡Buenos días!' });
    } else if (horaActual >= 12 && horaActual < 18) {
      this.setState({ saludo: '¡Buenas tardes!' });
    } else {
      this.setState({ saludo: '¡Buenas noches!' });
    }
  };

  render() {
    return (
      <div>
        <h2>Saludo</h2>
        <h2>{this.state.saludo}</h2>
      </div>
    );
  }
}

