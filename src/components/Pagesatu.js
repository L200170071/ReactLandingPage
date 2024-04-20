import React from 'react';
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap"
import Foto from '../assets/bg.png'
import Andro from '../assets/produk/andro.png'
import Jasa from '../assets/produk/jasa.png'
import Micro from '../assets/produk/micro.png'
import Nabu from '../assets/produk/nabu.png'
import Rans from '../assets/produk/rans.png'
import Tech from '../assets/produk/tech.png'
import Baut from '../assets/produk/baut.png'
import Buku from '../assets/produk/buku.png'
import Bumi from '../assets/produk/bumi.png'
import Kotak from '../assets/produk/kotak.png'
import Rubik from '../assets/produk/rubik.png'
import Toples from '../assets/produk/toples.png'
import Anime from '../assets/produk/anime.png'

const Pagesatu = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md style={{marginTop: '10%'}}>
                        <h1><b>Navigating the digital landscape for success</b></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button variant="dark">Join with us</Button>
                    </Col>
                    <Col md>
                        <img style={{height: '600px'}} src={Foto} />
                    </Col>
                </Row>
                <Row>
                    <Col md><center><img style={{height: '50px'}} src={Andro} /></center></Col>
                    <Col md><center><img style={{height: '50px'}} src={Jasa} /></center></Col>
                    <Col md><center><img style={{height: '50px'}} src={Micro} /></center></Col>
                    <Col md><center><img style={{height: '50px'}} src={Nabu} /></center></Col>
                    <Col md><center><img style={{height: '50px'}} src={Rans} /></center></Col>
                    <Col md><center><img style={{height: '50px'}} src={Tech} /></center></Col>
                </Row>
                <Row>
                    <Col md={2} style={{marginTop: '10%'}}>
                        <h2><center><b style={{backgroundColor: "#B9FF66"}}>Service</b></center></h2>
                    </Col>
                    <Col md={6} style={{marginTop: '9%'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                    <Col md={4} style={{marginTop: '10%'}}>
                        
                    </Col>
                </Row>
                <Row style={{marginTop: '5%'}}>
                    {/* <Col md={1}></Col> */}
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', boxShadow: "6px 6px 6px #9E9E9E", marginBottom: '5%', backgroundColor: '#e9e9e9'}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "#B9FF66"}}>Search engine optimization </b>
                                                        </h4> 
                                                        <p className="card-text" style={{marginTop: '30%'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Lern more 
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "50%" }}>
                                                        <img style={{height: '150px'}} class="float-right" src={Baut} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', backgroundColor: "#B9FF66", boxShadow: "6px 6px 6px #9E9E9E", marginBottom: '5%'}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "white"}}>Pay-per-click advertising </b>
                                                        </h4>
                                                        <p className="card-text" style={{marginTop: '43%'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Learn more
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "50%" }}>
                                                        <img style={{height: '150px'}} src={Bumi} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    {/* <Col md={1}></Col> */}
                    {/* <Col md={1}></Col> */}
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', boxShadow: "6px 6px 6px #9E9E9E", marginBottom: '5%', backgroundColor: '#272E2F'}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "white"}}>Social Media Marketing </b>
                                                        </h4> 
                                                        <p className="card-text" style={{marginTop: '37%', color: 'white'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', color: 'white'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Lern more 
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "50%" }}>
                                                        <img style={{height: '150px'}} class="float-right" src={Kotak} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', backgroundColor: "#e9e9e9", boxShadow: "6px 6px 6px #9E9E9E", marginBottom: '5%'}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "65%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "#B9FF66"}}>Email Marketing </b>
                                                        </h4>
                                                        <p className="card-text" style={{marginTop: '38%'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Learn more
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "35%" }}>
                                                        <img style={{height: '150px'}} src={Buku} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    {/* <Col md={1}></Col> */}
                    {/* <Col md={1}></Col> */}
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', boxShadow: "6px 6px 6px #9E9E9E", marginBottom: '5%', backgroundColor: '#B9FF66'}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "white"}}>Content Creation </b>
                                                        </h4> 
                                                        <p className="card-text" style={{marginTop: '48%'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Lern more 
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "50%" }}>
                                                        <img style={{height: '150px'}} class="float-right" src={Rubik} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    <Col md={6}>
                        <div className="d-flex align-items-center  
                            justify-content-center"> 
                            <Card style={{ width: '40rem', backgroundColor: "#272E2F", boxShadow: "6px 6px 6px #9E9E9E"}}> 
                                <Card.Body> 
                                    <div> 
                                        <table size="sm" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        <h4 className="card-title"> 
                                                            <b style={{backgroundColor: "white"}}>Analytics and Tracking </b>
                                                        </h4>
                                                        <p className="card-text" style={{marginTop: '40%', color: 'white'}}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 512 512"><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Learn more
                                                        </p> 
                                                    </td>
                                                    <td style={{ width: "50%" }}>
                                                        <img style={{height: '150px'}} src={Toples} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </Card.Body> 
                            </Card> 
                        </div> 
                    </Col>
                    {/* <Col md={1}></Col> */}
                </Row>
                <Row>
                    <Col md={12}>
                        <Card border="light" style={{backgroundColor: '#e9e9e9'}}>
                            <div>
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "50%" }}>
                                            <Card.Body>
                                                <Card.Title><h2>Let's makes things happines</h2></Card.Title>
                                                <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Card.Text>
                                                <Button variant="dark">Go somewhere</Button>
                                            </Card.Body>
                                            </td>
                                            <td style={{ width: "50%" }}>
                                                <center><img style={{height: '400px'}} src={Anime} /></center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} style={{marginTop: '10%'}}>
                        <h2><center><b style={{backgroundColor: "#B9FF66"}}>Use Cases</b></center></h2>
                    </Col>
                    <Col md={6} style={{marginTop: '9%'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                    <Col md={4} style={{marginTop: '10%'}}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12} style={{marginTop: '5%'}}>
                        <Card style={{backgroundColor: '#272E2F'}}>
                            <div>
                                <table size="sm" striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <Card.Body>
                                                <td style={{ width: "30%" }}>
                                                    <p style={{color: "white"}}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <h5 style={{marginTop: '5%', color: '#B9FF66'}}>Learn more</h5>
                                                </td>
                                                <td style={{ width: "5%" }}></td>
                                                <td style={{ width: "30%" }}>
                                                    {' '}
                                                    <p style={{color: "white"}}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <h5 style={{marginTop: '5%', color: '#B9FF66'}}>Learn more</h5>
                                                    {' '}
                                                </td>
                                                <td style={{ width: "5%" }}><div className="vr" /></td>
                                                <td style={{ width: "30%" }}>
                                                    <p style={{color: "white"}}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <h5 style={{marginTop: '5%', color: '#B9FF66'}}>Learn more</h5>
                                                </td>
                                            </Card.Body>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} style={{marginTop: '10%'}}>
                        <h2><center><b style={{backgroundColor: "#B9FF66"}}>Pricing</b></center></h2>
                    </Col>
                    <Col md={6} style={{marginTop: '9%'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                    <Col md={4} style={{marginTop: '10%'}}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pagesatu