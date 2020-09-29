import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export function LocalNavbar(props) {
    let validateDropdown = dropdown =>(
            dropdown && dropdown.title && dropdown.links && dropdown.links.length>0) ? 
                dropdown.links.map(link=>
                    link.name && link.url ? true : false).includes(true) : false;
    let validateLink = link => link.name && link.url ?  true : false;
    let validateNavbar = navbar => ( 
        navbar && navbar.length > 0) ? navbar.map( element => 
            element.type==="link" ? validateLink(element.link) ? true : false : 
            element.type==="dropdown" ? validateDropdown(element.dropdown) ? true : false : 
            false
        ).includes(true) : false;
    let getLink=(link) => (validateLink(link)) ? 
            <Nav.Link href={link.url}> { link.name } </Nav.Link> : null;
    let getDropdown=(dropdown)=> validateDropdown(dropdown) ? 
            <NavDropdown title={dropdown.title} id="basic-nav-dropdown">{
                dropdown.links.map((link)=>
                    (link.name && link.url) ? <NavDropdown.Item href={link.url}>{link.name}</NavDropdown.Item> : null
                )
            }</NavDropdown> : null;

    return validateNavbar( props.layout ) ?
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="mr-auto">
                {
                    props.layout.map( element => 
                    element.type==="link" ? getLink(element.link) : element.type==="dropdown" ? getDropdown(element.dropdown) : null )
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>  : null;
}