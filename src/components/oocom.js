import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import{ NavLink } from 'react-router-dom';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navbar-form navbar-fixed-top">
            <Navbar color="faded" fixed="top" expand="md">
                <NavbarBrand href="/">LOGO?</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/inicio">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
