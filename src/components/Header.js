import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Styles.scss';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import  { AiFillPhone, AiOutlineAlignLeft } from "react-icons/ai";
//import { AiOutlineSearch } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

function Header() { 
    return (

        <Navbar className='header' expand={false}>
  <Container fluid>




    
        <a href className='logo'>Black<span>Golf</span></a>

        <nav className='navbar'>
            <a href>Home</a>
            <a href>About</a>
            <a href>Services</a>
            <a href>Projects</a>
            <a href>Pricing</a>
            <a href>Contact</a>
            <a href>News</a>
        </nav>

        <div className='icons'>
            
        <AiOutlineAlignLeft id='menu-btn' />
            <CgProfile className='icon' />
            <BiSearch className='icon'/>
            <FaInfoCircle className='icon' />
        </div>
       

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
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
    <a href><TiSocialTwitter /></a>
    <a href><TiSocialFacebook /></a>
    <a href><TiSocialInstagram /></a>
    <a href><TiSocialYoutube /></a>


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
