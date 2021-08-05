import React from 'react'
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
    <Navbar bg="light" expand="lg" >
    <Navbar.Brand href="/">Fresh Flowers</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        {/* <Navbar.Collapse className="justify-content-end"> */}
            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#action2">Summer Flowers</Nav.Link>
            
            <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Wedding</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Occasions</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#" disabled>
                Order now
            </Nav.Link>
            </Nav>
            
            <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search flowers"
                className="mr-2 mx-2"
                aria-label="Search"
            />
                <Button variant="outline-success">Search</Button>
            </Form>

            
            <Link to={`/signup`} type="button" className="btn btn-outline-secondary mx-3">Sign up</Link>
            {localStorage.getItem('user_json')? <Link to={`/addStore`} type="button" className="btn btn-outline-primary mx-3">Add a store</Link>: <Link to={`/login`} type="button" className="btn btn-outline-primary mx-3">Sign in</Link>}
            
            <Link to={`/`} type="button" className="btn btn-outline-primary mx-3" onClick={() => localStorage.clear()}>Logout</Link>
        
        </Navbar.Collapse>
    </Navbar>
    )
}
