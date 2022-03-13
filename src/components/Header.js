import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Styles.scss';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import  { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import NavbarToggles from './NavbarToggles';





function Header() { 
    return (

        <Navbar className='header' expand={false}>
  <Container fluid className='Nav'>




    
        <a href className='logo'>Black<span>Golf</span></a>

        <nav className='navbar' id='col'>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Pricing">Pricing</a>
            <a href="#Contact">Contact</a>
            <a href="#News">News</a>
        </nav>

        <div className='icons'>
        
            <CgProfile className='icon' />
            <BiSearch className='icon'/>
            <FaInfoCircle className='icon' />
        </div>
        <NavbarToggles>
          </NavbarToggles> 

        <Navbar.Toggle aria-controls="offcanvasNavbar" className='Toggle' />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{width: "30rem"}}
    >
      <Offcanvas.Header closeButton className='closebutton'>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <div className='contactinfo'>
<div className='info'>
    <AiFillPhone />
    <h3>Phone Number</h3>
    <p>+4426373829</p>
</div>
<div className='info'>
    <MdEmail />
    <h3>email address</h3>
    <p>blackgold@gmail.com</p>
</div>
<div className='info'>
    <ImLocation />
    <h3>office address</h3>
    <p>New York, USA</p>
</div>
<div className='share'>
    <a href="/#"><TiSocialTwitter /></a>
    <a href="/#"><TiSocialFacebook /></a>
    <a href="/#"><TiSocialInstagram /></a>
    <a href="/#"><TiSocialYoutube /></a>


</div>
    </div>

    </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
  </Navbar>





    
      );
}

export default Header;


