
import React from 'react';
import './listado.css';

class Listado extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        estaCargado: false,
        elementos: []
      };
    }
  
    componentDidMount() {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(
          (resultado) => {
            this.setState({
                error: null,
                estaCargado: true,
                elementos: resultado
            });
          },
          // Manejo de errores
          (errores) => {
            this.setState({
                error: errores,
                estaCargado: true,
                elementos: []
            });
          }
        )
    }
  
    render() {
      const { error, estaCargado, elementos } = this.state;
      if (error) {
        return <div>Se encontró el siguiente error: {error.message}</div>;
      } else if (!estaCargado) {
        return <div>Cargando los datos...</div>;
      } else {
        return (
          <ul>
            {elementos.map(elemento => (
              <li key={elemento.id}>
                {elemento.id} {elemento.name} {elemento.username} {elemento.email}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  
export default Listado;
