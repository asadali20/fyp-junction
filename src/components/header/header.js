import React, { Component } from 'react'
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <div className='App-Header'>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">FYP Junction</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            </Nav>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/about">About</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
};

export default Header;