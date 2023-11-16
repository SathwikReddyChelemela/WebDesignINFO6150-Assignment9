import {

    Link, Outlet
  } from "react-router-dom";
  import Nav from 'react-bootstrap/Nav';
  import Container from 'react-bootstrap/Container';
  import Navbar from 'react-bootstrap/Navbar';
function Layout(){
return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" backgroundColor= '#29ADB2' >
      <Container>
      <Navbar.Brand href="#home">CSR Tech Review</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">Reviews</Nav.Link>
            <Nav.Link href="/job">Job</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
 <Outlet/>
 </div>
)
}

export default Layout;