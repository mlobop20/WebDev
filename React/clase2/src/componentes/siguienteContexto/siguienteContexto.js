import React, { Component } from 'react'
import './siguienteContexto.css';
import Contexto from '../contexto/contexto';


export default class SiguienteContexto extends Component {
    constructor(props) {
        super(props);
        //this.filtro = this.filtro.bind(this);
    }

    filtro = (event) => {
        alert(this.props.lista + " " + event.target.value);
    }
    render() {
        return (
            //<Contexto filtro={this.filtro.bind(this)} lista="Componente Contexto" />

            <Contexto filtro={this.filtro} lista="Componente Contexto" />
        )
    }
}
