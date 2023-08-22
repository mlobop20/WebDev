

import React from 'react';
import './avisos.css';

class Avisos extends React.Component {
   render() {
    const listaAvisos = this.props.listaAvisos;
    return (
        <div>
            <h1>Bienvenido(a) {this.props.nombre}!</h1>
            {listaAvisos.length > 0 &&
            <h2>
            Hay {listaAvisos.length} avisos pendientes de revisar.
            </h2>
            }
        </div>
        );
    }
}

export default Avisos;