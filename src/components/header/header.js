import React, { Component } from 'react';
import logo from '../../assets/images/Zauba-logo.png';
import './header.css';
import { Navbar, Dropdown } from 'react-bootstrap';
import firebase from '../../config/fire';
import Axios from '../../axios/axios2';
import Nav from 'react-bootstrap/Nav';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            imagePreviewUrl: logo,
        }

        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        Axios.get("/").then(res => {
            const result = this;
            result.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                imagePreviewUrl: res.data.imagePreviewUrl
            });
        }).catch(response => {
            console.log('Error')
        });
    }

    // Logout
    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            // Header
            <header>
                <Navbar expand="lg">
                    {/* Logo */}
                    <Navbar.Brand href="/dashboard"><img src={logo} alt="Logo" width="120" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/update-profile">Update Profile</Nav.Link>
                            <Nav.Link href="/reports">Reports</Nav.Link>

                            {/* --- User Dropdown --- */}
                            <Dropdown className="user-action">
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                    <img src={this.state.imagePreviewUrl} alt="UserPicture" /> <span>{this.state.firstName} {this.state.lastName}</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="javscript:void(0)" onClick={this.logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default header;
