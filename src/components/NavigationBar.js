import React from 'react';
import { Navbar, Container, Nav, Row, Col, Card, Button } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand style={{fontSize: '28px'}}><b>Digital Product</b></Navbar.Brand>
                    <Nav>
                        <Nav.Link style={{marginTop: '1%'}}>About Us</Nav.Link>
                        <Nav.Link style={{marginTop: '1%'}}>Services</Nav.Link>
                        <Nav.Link style={{marginTop: '1%'}}>Use Cases</Nav.Link>
                        <Nav.Link style={{marginTop: '1%'}}>Pricing</Nav.Link>
                        <Nav.Link style={{marginTop: '1%'}}>Blog</Nav.Link>
                        <Nav.Link><Button variant="outline-success">Request a quote</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar