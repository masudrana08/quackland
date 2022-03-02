import React, {useState} from 'react'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import {AiOutlineMedium} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
export default function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div className='mynavbarC'>
      <Navbar expand="lg" className='p-0'>
      <div className='navbar-nav'>
        <div  style={{width: '206px'}}>
          <Navbar.Brand href="#home" className='hideInMobile'>
            <img className='nav-logo' src="/images/logo.png" alt="" />
          </Navbar.Brand>
        </div>
        <div>
        <Nav className="me-auto links hideTheMenu">
              <Nav.Link href="#mission">Mission</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#faq">Faq</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
        {/* <Navbar.Collapse id="basic-navbar-nav">
           
        </Navbar.Collapse> */}
        </div>
        <div className='nav-icon'>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
            <Navbar.Brand href="#home" className='hideInDesktop'>
              <img className='nav-logo' src="/images/logo.png" alt="" />
            </Navbar.Brand>
          </div>
          <div className='d-flex'>
            <div className='icon-bg'><img src='/images/medium.png' /></div>
            <div className='icon-bg'><img src='/images/twitter.png' /></div>
            <div className='icon-bg'><img src='/images/discord.png' /></div>
          </div>
        </div>
      </div>
      <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={show} onHide={handleClose} 
          scroll={false}
        >
          
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
          <Nav className="me-auto">
            <Nav.Link href="#mission" >Mission</Nav.Link>
            <Nav.Link href="#roadmap" >Roadmap</Nav.Link>
            <Nav.Link href="#faq" >Faq</Nav.Link>
            <Nav.Link href="#team" >Team</Nav.Link>
          </Nav>
       
        
      </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
    </div>
  )
}
