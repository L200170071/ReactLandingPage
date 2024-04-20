import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Pexelsone from '../assets/people/pexelsone.jpg'
import Pexelstwo from '../assets/people/pexelstwo.jpg'
import Pexelsthree from '../assets/people/pexelsthree.jpg'
import Pexelsfour from '../assets/people/pexelsfour.jpg'
import Pexelsfive from '../assets/people/pexelsfive.jpg'
import Pexelssix from '../assets/people/pexelssix.jpg'
import Heyoku from '../assets/people/hayo.jpg'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CardGroup from 'react-bootstrap/CardGroup';

function Accordionmenu() {
  return (
    <Container style={{marginTop: '5%'}}>
        <Row>
            <Col md={12}>
                <Accordion defaultActiveKey="0" style={{boxShadow: "6px 6px 6px #9E9E9E"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 style={{marginTop: '2%', marginBottom: '2%'}}>How accurate is Leadfeeder data?</h5></Accordion.Header>
                        <Accordion.Body style={{backgroundColor: "#CFE2FF"}}>
                        <hr style={{marginTop: '-2%'}} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col md={12} style={{marginTop: '2%'}}>
                <Accordion defaultActiveKey="1" style={{boxShadow: "6px 6px 6px #9E9E9E"}}>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h5 style={{marginTop: '2%', marginBottom: '2%'}}>How does Leadfeeder compare to other options?</h5></Accordion.Header>
                        <Accordion.Body style={{backgroundColor: "#CFE2FF"}}>
                        <hr style={{marginTop: '-2%'}} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col md={12} style={{marginTop: '2%'}}>
                <Accordion defaultActiveKey="2" style={{boxShadow: "6px 6px 6px #9E9E9E"}}>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h5 style={{marginTop: '2%', marginBottom: '2%'}}>I already have a marketing automation tool-why do I need Leadfeeder?</h5></Accordion.Header>
                        <Accordion.Body style={{backgroundColor: "#CFE2FF"}}>
                        <hr style={{marginTop: '-2%'}} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{marginTop: '10%'}}>
                <h2><center><b style={{backgroundColor: "#B9FF66"}}>Blog</b></center></h2>
            </Col>
            <Col md={6} style={{marginTop: '9%'}}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Col>
            <Col md={4} style={{marginTop: '10%'}}>
                
            </Col>
        </Row>
        <Row style={{marginTop: '5%'}}>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelsone} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Phill Jhon</b></h5>
                                                <h6>Marketing planner</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelstwo} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Daniel Radcliffe</b></h5>
                                                <h6>Senior SEO Specialist</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelsthree} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Emma Watson</b></h5>
                                                <h6>Director of Operations</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelsfour} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Richard Harris</b></h5>
                                                <h6>Social Media Specialist</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelsfive} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Bonnie Wright</b></h5>
                                                <h6>Content Creator</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="square rounded-9" style={{ width: '25rem', boxShadow: "2px 5px 2px #9E9E9E", marginTop: '5%' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div> 
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <center><Image src={Pexelssix} roundedCircle style={{height: '70px', boxShadow: "2px 5px 2px #9E9E9E"}} /></center>
                                            </td>
                                            <td style={{ width: "70%" }}>
                                                <h5><b>Robbie Coltrane</b></h5>
                                                <h6>Marketing planner</h6>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <Button variant="dark" size="sm" className="rounded-circle" style={{height: '30px', width: '30px', color: 'white', fontFamily: 'serif', fontSize: '10px'}}><b>In</b></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </Card.Subtitle>
                        <Card.Text>
                            <hr />                          
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={10}>

            </Col>
            <Col md={2}>
                <div style={{float: 'right', marginRight: '7%'}}>
                    <Button variant="dark" size="md" style={{color: 'white', marginTop: '15%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={2} style={{marginTop: '10%'}}>
                <h2><center><b style={{backgroundColor: "#B9FF66"}}>Request</b></center></h2>
            </Col>
            <Col md={6} style={{marginTop: '9%'}}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Col>
            <Col md={4} style={{marginTop: '10%'}}>
                
            </Col>
        </Row>
        <Row style={{marginTop: '5%'}}>
            <Col md={12}>
                <CardGroup>
                    <Card style={{backgroundColor: '#e9e9e9'}} border="light">
                        <Card.Body>
                        <Card.Title><h2 style={{marginTop: '5%'}}>Sing up for Comment Our Project</h2></Card.Title>
                        <Card.Text>
                            <InputGroup hasValidation style={{marginTop: '5%'}}>
                            <InputGroup.Text>First Name</InputGroup.Text>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup hasValidation style={{marginTop: '5%'}}>
                            <InputGroup.Text>Last Name</InputGroup.Text>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup hasValidation style={{marginTop: '5%'}}>
                            <InputGroup.Text>No Telp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup hasValidation style={{marginTop: '5%'}}>
                            <InputGroup.Text>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup hasValidation style={{marginTop: '5%'}}>
                            <InputGroup.Text>Password&nbsp;&nbsp;&nbsp;</InputGroup.Text>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                            </InputGroup>

                        </Card.Text>
                        <Button variant="dark" style={{marginTop: '2%'}}>Save</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <center><Image src={Heyoku} style={{height: '500px'}} /></center>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </Row>
        <Row style={{marginTop: '10%'}}>
            <Col md={2}>
            
            </Col>
            <Col md={8}>
                <center>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height: '30px'}}><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height: '30px'}}><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{height: '30px'}}><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{height: '30px'}}><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height: '30px'}}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height: '30px'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </center>
            </Col>
            <Col md={2}>
            
            </Col>
        </Row>
    </Container>
  );
}

export default Accordionmenu;