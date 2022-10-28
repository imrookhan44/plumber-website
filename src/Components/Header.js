import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, NavDropdown } from 'react-bootstrap'
import './Header.css'
import logo from './../assets/logo.png'
function Header() {
    return (
        <Fragment >
            <Navbar collapseOnSelect expand="lg" variant="dark" id='mainNavbar'>
                <Container >
                    <img src={logo} style={{ width: "1.6rem" }} className="" />
                    <Navbar.Brand href="#home">Plumber</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto px-3 offset-6">
                            <Nav.Link className='navbarLinks'>Home</Nav.Link>
                            <Nav.Link className='navbarLinks'>Services</Nav.Link>
                            <Nav.Link className='navbarLinks'>Features</Nav.Link>
                            <Nav.Link className='navbarLinks'>TestiMonail</Nav.Link>
                            <Nav.Link className='navbarLinks'>Contact us</Nav.Link>

                            <NavDropdown title="Pages" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="navDropdownItems">Generic</NavDropdown.Item>
                                <NavDropdown.Item className="navDropdownItems">Elements</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header
