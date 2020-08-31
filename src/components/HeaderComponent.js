import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ReactComponent as Logo } from '../logo/Unicen_logo2.svg';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed="top" light expand="md">
                <NavbarBrand href="/" className="">
                    <Logo height={60} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/inicio">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/acercade">Acerca de esta Guía</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/datosutiles">Datos útiles</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
