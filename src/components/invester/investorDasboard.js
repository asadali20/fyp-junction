import React, { Component } from 'react';
import {NavDropdown,Nav,Navbar, Button, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import '../studentLogin/studashboard.css' ;
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
// import StuRoutes from '../studentLogin/Sturoutes';
import Cards from '../cards/Cards'



export default class InvestorDashboard extends Component {
    render() {   
        return (
            <div className='stu-dashboard'>
                <div className='stu-navbar'>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">FYP Junction</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                            <Nav className='ml-auto'>
                            <Nav.Link href="/studentLogin">Home</Nav.Link>
                            <Nav.Link href="">settings</Nav.Link>
                            <Nav.Link href="">Profile</Nav.Link>
                            <Nav.Link href="">Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div>
                <Cards /> 
                </div>
            </div>
        )
    }
}

