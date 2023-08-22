import React from 'react';
import './formularioB.css';

class FormularioB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estanIngresando: true,
            numeroPasajeros: 4
        };

        this.ejecutarCambios = this.ejecutarCambios.bind(this);
    }

    ejecutarCambios(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Están Ingresando:
                    <input
                        name="estanIngresando"
                        type="checkbox"
                        checked={this.state.estanIngresando}
                        onChange={this.ejecutarCambios} />
                </label>
                <br />
                <label>
                    Número de Pasajeros:
                    <input
                        name="numeroPasajeros"
                        type="number"
                        value={this.state.numeroPasajeros}
                        onChange={this.ejecutarCambios} />
                </label><br /> {this.state.estanIngresando + " | " + this.state.numeroPasajeros}
            </form>
        );
    }
}

export default FormularioB;