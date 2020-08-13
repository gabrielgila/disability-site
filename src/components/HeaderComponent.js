import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed="top" light expand="md">
                <NavbarBrand href="/">Logo?</NavbarBrand>
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
