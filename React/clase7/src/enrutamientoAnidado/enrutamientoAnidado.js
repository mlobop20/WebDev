

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function EnrutamientoAnidado() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/quienessomos">Quienes Somos</Link>
                    </li>
                    <li>
                        <Link to="/productos">Categorías de Productos</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/quienessomos">
                        <QuienesSomos />
                    </Route>
                    <Route path="/productos">
                        <Productos />
                    </Route>
                    <Route path="/">
                        <Inicio />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Inicio() {
    return <div><h2>Inicio</h2><p>Página de Inicio</p></div>;
}
function QuienesSomos() {
    return <div><h2>Quienes Somos</h2><p>Página de Presentación</p></div>;
}

function Productos() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Productos</h2>
            <p>Página con Información de las Categorías de Productos</p>
            <ul>
                <li>
                    <Link to={`${match.url}/tecnologia/celulares`}>Tecnología</Link>
                </li>
                <li>
                    <Link to={`${match.url}/hogar/muebles`}>
                        Hogar
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/deportes/natacion`}>
                        Deportes
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:categoriaId/:subcategoriaId`}>
                    <Categoria />
                </Route>
                <Route path={match.path}>
                    <h3>Por favor seleccione una categoría de productos.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Categoria() {
    let categoriaId = useParams().categoriaId, subCategoríaId = useParams().subcategoriaId;
    return <h3>Categoría Seleccionada: {categoriaId}, SubCategoría: {subCategoríaId}</h3>;
}

