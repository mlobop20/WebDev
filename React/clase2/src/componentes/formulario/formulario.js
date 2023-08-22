import React, { Component } from 'react'
import './formulario.css'

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = { nombre: '', mensaje: '', prioridad: ['urgente', 'otra'] };

        this.ejecutarCambios = this.ejecutarCambios.bind(this);
        this.ejecutarCambiosMensaje = this.ejecutarCambiosMensaje.bind(this);
        this.ejecutarCambiosPrioridad = this.ejecutarCambiosPrioridad.bind(this);
        this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
    }

    ejecutarCambios(event) {
        this.setState({ nombre: event.target.value.toUpperCase() });
    }

    ejecutarCambiosMensaje(event) {
        this.setState({ mensaje: event.target.value.toLowerCase() });
    }

    ejecutarCambiosPrioridad(event) {

        var opciones = event.target.options;
        var valores = [];

        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].selected) {
                valores.push(opciones[i].value);
            }
        }

        this.setState({ prioridad: valores });

        //this.setState({ prioridad: event.target.value });
    }

    ejecutarSubmit(event) {
        document.write("El nombre enviado es: " + this.state.nombre + ". ");
        document.write("El mensaje enviado es: " + this.state.mensaje + ". ");
        document.write("La prioridad del mensaje enviado es: " + this.state.prioridad);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.ejecutarSubmit}>
                <label>Nombre</label>
                <input type="text" value={this.state.nombre} onChange={this.ejecutarCambios} />
                <br />
                <label>Mensaje</label>
                <textarea value={this.state.mensaje} onChange={this.ejecutarCambiosMensaje}></textarea>
                <br />
                <label>Prioridad</label>
                <select multiple value={this.state.prioridad} onChange={this.ejecutarCambiosPrioridad}>
                <option value="Empty"></option>

                    <option value="normal">Normal</option>
                    <option value="urgente">Urgente</option>
                    <option value="otra">Otra</option>
                </select>
                <br />
                <input type="submit" value="Enviar" />
                {this.state.nombre + " | " + this.state.mensaje + " | " + this.state.prioridad}
            </form>
        );
    }

}