

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export default function EnrutamientoParametros() {
  return (
    <Router>
      <ParametrosConsulta />
    </Router>
  );
}

// Este "hook" convierte la "useLocation" al "string" de consulta
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ParametrosConsulta() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Redes:</h2>
        <ul>
          <li>
            <Link to="/red?nombre=facebook&tipo=1">Facebook</Link>
          </li>
          <li>
            <Link to="/red?nombre=twitter&tipo=2">Twitter</Link>
          </li>
          <li>
            <Link to="/red?nombre=instagram&tipo=3">Instagram</Link>
          </li>
        </ul>

        <Contenido nombre={query.get("nombre")} tipo={query.get("tipo")} />
      </div>
    </div>
  );
}

function Contenido({ nombre, tipo }) {
  return (
    <div>
      {nombre ? (
        <h3>
          El <code>nombre</code> en el "string" de consulta es  &quot;{nombre} y el tipo es &quot;{tipo}
          &quot;
        </h3>
      ) : (
        <h3>No se encontró el "string" de consulta</h3>
      )}
    </div>
  );
}