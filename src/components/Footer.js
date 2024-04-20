import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer(){
    return (
        <div>
            <Container fluid style={{backgroundColor: '#272E2F', marginTop: '5%'}}>
                <Row style={{marginLeft: '10%', marginRight: '10%'}}>
                    
                    <Col md={2}>
                        <h4 style={{color: 'white', marginTop: '20%'}}>DOOGEE</h4>
                        <p style={{color: 'grey'}}>
                            <table size="sm">
                                <tbody>
                                    <tr>
                                        <td>Teardown</td>
                                    </tr>
                                    <tr>
                                        <td>News</td>
                                    </tr>
                                    <tr>
                                        <td>Partners</td>
                                    </tr>
                                    <tr>
                                        <td>About Us</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Us</td>
                                    </tr>
                                    <tr>
                                        <td>Term of Use</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </Col>
                    <Col md={2}>
                        <h4 style={{color: 'white', marginTop: '20%'}}>Social</h4>
                        <p style={{color: 'grey'}}>
                            <table size="sm">
                                <tbody>
                                    <tr>
                                        <td>Facebook</td>
                                    </tr>
                                    <tr>
                                        <td>Twitter</td>
                                    </tr>
                                    <tr>
                                        <td>Youtube</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </Col>
                    <Col md={2}>
                        <h4 style={{color: 'white', marginTop: '20%'}}>Service</h4>
                        <p style={{color: 'grey'}}>
                            <table size="sm">
                                <tbody>
                                    <tr>
                                        <td>Compare</td>
                                    </tr>
                                    <tr>
                                        <td>Download</td>
                                    </tr>
                                    <tr>
                                        <td>Feedback</td>
                                    </tr>
                                    <tr>
                                        <td>Bug Report</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </Col>
                    <Col md={2}>
                        <h4 style={{color: 'white', marginTop: '20%'}}>Activity</h4>
                        <p style={{color: 'grey'}}>
                            <table size="sm">
                                <tbody>
                                    <tr>
                                        <td>Influencers</td>
                                    </tr>
                                    <tr>
                                        <td>Affiliate</td>
                                    </tr>
                                    <tr>
                                        <td>Co-branding</td>
                                    </tr>
                                    <tr>
                                        <td>Honor</td>
                                    </tr>
                                    <tr>
                                        <td>Giveaway</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </Col>
                    <Col md={4}>
                        <h4 style={{color: 'white', marginTop: '10%'}}>News Subscription</h4>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Subscribe to our newslatter"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2"><Button variant="warning">Subscribe</Button></InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <hr style={{color: 'grey'}} />
                        <center>
                            <p style={{color: 'grey'}}>Copyright 2018 DOOGLEE. All right reserved</p>
                        </center>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;