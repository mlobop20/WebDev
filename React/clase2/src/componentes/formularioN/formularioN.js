import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './formularioN.css';


export default class FormularioN extends Component {
    constructor(props) {
        super(props);
        this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
        this.input = React.createRef();
      }
    
      ejecutarSubmit(event) {
        document.write('Se ha enviado el siguiente mensaje: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.ejecutarSubmit}>
            <label>

              Mensaje:
              <input type="text"  defaultValue="Ingrese el mensaje por favor" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
      }