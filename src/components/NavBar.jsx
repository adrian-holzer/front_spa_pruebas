import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // O usa tu librería de UI preferida

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Mi Aplicación</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/empleo">Listado de Empleos</Nav.Link>
                    <Nav.Link as={Link} to="/empleosProfesional">Listado de Empleos con postulaciones(tiene que estar logueado un profesional)</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/registrarUsuario">Crear Usuario</Nav.Link>
                    <Nav.Link as={Link} to="/logout">Logout(si esta logueado)</Nav.Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
