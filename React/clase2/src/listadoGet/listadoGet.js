import React from 'react';

class ListadoGET extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        estaCargado: false,
        elementos: []
      };
    }
  
    componentDidMount() {

      const consultaId = '2';

      fetch("http://jsonplaceholder.typicode.com/users" + "/" + consultaId)
        .then(respuesta => respuesta.json())
        .then(
          (resultado) => {
            
            var nuevalista = [];    
            nuevalista.push(resultado);   

            this.setState({
                error: null,
                estaCargado: true,
                elementos: nuevalista
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
  
export default ListadoGET;