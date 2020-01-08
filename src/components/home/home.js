import React, { Component } from 'react';
import './home.css';
import Header from '../header/header';
// import {Layout, Content, Navigation, Drawer,Header} from 'react-mdl';
// import {Link} from 'react-router-dom';
import { DropdownButton,Dropdown} from 'react-bootstrap';
class Home extends Component
{
    render()
    {
        return(
            <div >
                <Header/>
            <div className='home'> 
            <div className="title">
            <h1>FYP Junction.com</h1>
            </div>
            <div className='home-btn'>
            <div>
            <DropdownButton variant='transparent' id="dropdown-basic-button" title="SignUP">
                <Dropdown.Item href="/StudentSignup" >As a Student</Dropdown.Item>
                <Dropdown.Item href="/InvesterSignup">As an Investor</Dropdown.Item>
            </DropdownButton>
            </div>
            <div>
            <DropdownButton variant='transparent' id="dropdown-basic-button" title="Login">
                <Dropdown.Item href="/studentLogin">As a Student</Dropdown.Item>
                <Dropdown.Item href="/InvestorLogin">As an Investor</Dropdown.Item>
            </DropdownButton>
            </div>
                    {/* <div className='btn1'>
                        <DropdownButton id="dropdown-basic-button" variant='transparent' size='lg' className='dropdown-button' title="SignUp">
                            <Dropdown.Item href="/StudentSignup">As a Student</Dropdown.Item>
                            <Dropdown.Item href="/InvesterSignup">As an Investor</Dropdown.Item>
                            </DropdownButton>
                    </div> */}
                    {/* <div className='btn2'>
                        <DropdownButton id="dropdown-basic-button" size='lg' variant='transparent' title="Login">
                            <Dropdown.Item href="/studentLogin">As a Student</Dropdown.Item>
                            <Dropdown.Item href="">As an Investor</Dropdown.Item>
                        </DropdownButton>
                        </div>   */}

            </div>
                </div>
            </div>
        )
    };
}
export default Home;
