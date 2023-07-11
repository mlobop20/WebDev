import './conmutador.css'
import React, { Component } from 'react'

export default class conmutador extends Component {
    constructor(props) {
        super(props);
        this.state = { estaActivo: true }
        this.manejarClick = this.manejarClick.bind(this);
    }

    manejarClick() {
        this.setState(
            state => ({
                estaActivo: !state.estaActivo
            })
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.manejarClick}>{this.state.estaActivo ? 'Encendido' : 'Apagado'}</button>

            </div>
        )
    }
}
