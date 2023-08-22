
import logo from './logo.svg';
import './App.css';
import Formulario from './formulario/formulario';
import Resultado from './resultado/resultado';
import FormularioContador from './formularioContador/formularioContador';

function App() {
  return (
    <div className="App">
        <Formulario></Formulario>
        <Resultado></Resultado>
        <h2>Otro ejemplo</h2>
        <FormularioContador></FormularioContador>

    </div>
  );
}

export default App;