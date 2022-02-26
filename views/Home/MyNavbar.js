import React from 'react'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import {AiOutlineMedium} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
export default function MyNavbar() {
  return (
    <div className='mynavbarC'>
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Offcanvas.Body>
      </Navbar.Offcanvas>
       <div>
       <AiOutlineMedium />
        <FaTwitter />
        <FaDiscord />
       </div>
      </Container>
    </Navbar>
    </div>
  )
}
