import React from 'react'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import {AiOutlineMedium} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
export default function MyNavbar() {
  return (
    <div className='mynavbarC'>
      <Navbar expand="lg" className='p-0'>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className='navbar-nav'>
        <div>
          <Navbar.Brand href="#home">
            <img className='nav-logo' src="/images/logo.png" alt="" />
          </Navbar.Brand>
        </div>
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#mission">Mission</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#faq">Faq</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
        <div>
          <AiOutlineMedium className='nav-icon' />
          <FaTwitter className='nav-icon' />
          <FaDiscord className='nav-icon' />
        </div>
      </div>
      <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
          <Nav className="me-auto">
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
          </Nav>
       
        
      </Offcanvas.Body>
      </Navbar.Offcanvas>
       
      </Container>
    </Navbar>
    </div>
  )
}
