import React, {useState, useEffect} from 'react'
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'




export default function NavBar({user, setUser}) {
    
    let history = useHistory()

    function handleLogoutClick() {
      console.log(user);
        async function logout(){
          const res = await fetch("/logout", { method: "DELETE" })
            if (res.ok) {
              setUser(null);
              localStorage.clear()
            };
          };
        logout()
      }

    return (
    <Navbar bg="dark" expand="lg" className="navbar navbar-expand-lg bg-dark navbar-dark p-3" >
        {/* <div className="container"> */}
            <div className="d-sm-flex">
            <Navbar.Brand href="/" className=""><span className="text-warning">Fresh Flowers</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="#">Summer Flowers</Nav.Link>
                    
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search flowers"
                        className="mr-2 mx-2"
                        aria-label="Search"
                    />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                   
                    <NavDropdown title="More" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    
                    <NavDropdown.Item href="/" onClick={handleLogoutClick}>Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addStore">Add Store</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item> 
                        
                    </NavDropdown>
                   
                   
                    </Nav>
                </Navbar.Collapse>
            </div>
        {/* </div> */}
    </Navbar>
    )
}
