import React, { Component } from 'react'
import './listado.css'

export default class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = { cantidad: this.props.cant }
        this.elements = [];

        for (let j = 0; j < this.state.cantidad; j++) {
            this.elements.push(<div><button onClick={this.eliminarFila.bind(this, j)}>Eliminar Fila {j + 1} Posición {j}</button><br /></div>);

        }
        //this.eliminarFila=this.eliminarFila.bind(this);
    }
 
    eliminarFila(j, e) {
        alert(j + ":  "+e.target + " + " + e.target.innerText);
    }



    render() {
        return (
            <div>
                <h1>Ejemplo envío de parámetros a manejadores de eventos</h1>
                {this.elements}
            </div>
        )
    }
}
