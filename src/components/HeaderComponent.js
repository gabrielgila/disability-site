import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ReactComponent as Logo } from '../logo/Unicen_logo2.svg';
import ReactTooltip from "react-tooltip";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed="top" light expand="md">
                <NavbarBrand href="/" className="">
                    <Logo height={60} alt="Logo Unicen" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/inicio" data-tip data-for="home">Inicio</NavLink>
                            <ReactTooltip id="home" place="bottom" effect="solid">
                                Inicio
                            </ReactTooltip>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/acercade" data-tip data-for="about">Acerca de esta Guía</NavLink>
                            <ReactTooltip id="about" place="bottom" effect="solid">
                                Acerca de esta Guía
                            </ReactTooltip>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/datosutiles" data-tip data-for="data">Datos útiles</NavLink>
                            <ReactTooltip id="data" place="bottom" effect="solid">
                                Datos útiles
                            </ReactTooltip>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
