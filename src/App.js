import React from 'react';
import * as Shards from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline style={{flex: 1.0}}>
                    <Container fluid noGutters style={{flex: 1.0}}>
                        <Row style={{flex: 1.0}}>
                            <Col md={4} className="col-9 pl-0 pr-0">
                                <FormControl type="text" placeholder="Search" className="w-100" />
                            </Col>
                            <Col className="col-3 pl-0 pr-0">
                                <Button variant="outline-success" className="w-100 pl-0 pr-0 text-justify text-center">Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Navbar.Collapse>
        </Navbar>
            <header className="App-header">
                <Button variant="primary">Primary</Button>
                <div class="container">
                    <div class="row">
                        <div class="col-8 order-last alert-primary">
                            First, but last
                        </div>
                        <div class="col-2 alert-warning">
                            Second, but unordered
                        </div>
                        <div class="col order-first alert-danger">
                            Third, but first
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
