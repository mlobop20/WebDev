import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ContactForm from '../formularioContacto/formularioContacto';
import Body from '../body/body';
import { Componente } from '../componente/componente';
import Recetass from '../recetas/recetas';

function NavBar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Router>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Todo sobre APLV</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/productos">Productos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/informacion">Información</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/recetas">Recetas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Switch>
                <Route path="/productos">
                    <Productos />
                </Route>
                <Route path="/informacion">
                    <Informacion />
                </Route>
                <Route path="/recetas">
                    <Recetas />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
                <Route path="/">
                    <Inicio />
                </Route>
            </Switch>
        </Router>
    );
}

function Inicio() {
    return <Body />;
}

function Productos() {
    return <Componente />;
}

function Informacion() {
    return <h2>Información</h2>;
}

function Recetas() {
    return <Recetass/>;
}

function Contacto() {
    return <ContactForm />;
}

export default NavBar;
