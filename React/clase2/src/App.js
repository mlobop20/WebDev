import logo from './logo.svg';
import './App.css';
import Aviso from './componentes/aviso/aviso';
import Publicacion from './componentes/publicacion/publicacion';
import Reloj from './componentes/reloj/reloj';
import Eventos from './componentes/eventos/eventos';
import Conmutador from './componentes/conmutador/conmutador';



function App() {
  return (
    // <div>
    //   <Aviso nombre="Maikol" edad="32"></Aviso>
    //   <h2>Otro componente {Date()}</h2>
    //   <br></br>
    //   <Publicacion autor={{ nombre: 'Pedro', puesto: 'Editor' }} texto="Publicación de prueba" fecha="04/07/2023"></Publicacion>
    // </div>
    <div>
      <Reloj nombre="Maikol" />
    <Eventos></Eventos>
    <Conmutador></Conmutador>
    </div>

  );
}

export default App;


