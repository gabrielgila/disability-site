import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ReactComponent as Logo } from '../logo/Unicen_logo2.svg';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed="top" light expand="md">
                <NavbarBrand href="/" className="mr-auto">
                    <Logo height={60} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/inicio">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/nosotros">Nosotros</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Link 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Link 2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Link 3</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
