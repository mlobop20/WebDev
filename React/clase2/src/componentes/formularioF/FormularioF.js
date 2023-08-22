
import React from 'react';

class FormularioF extends React.Component {
    constructor(props) {
      super(props);
      this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    ejecutarSubmit(event) {
      event.preventDefault();
      if (this.fileInput.current.files.length > 0)
      {
        document.write(
            `Archivo seleccionado - ${
            this.fileInput.current.files[0].name
            }`
        );
      }
      else
      {
          document.write("Debe seleccionar un archivo")
      }
    }
  
    render() {
      return (
        <form onSubmit={this.ejecutarSubmit}>
          <label>
            Subir Archivo:
            <input type="file" ref={this.fileInput} multiple />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  }
  
  export default FormularioF;
