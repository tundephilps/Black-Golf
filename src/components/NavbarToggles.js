import React from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
//import { AiOutlineAlignLeft } from 'react-icons/ai';
import './Styles.scss';



const NavbarToggles = ({ children }) => {
  return (
    <div className='NavbarToggle' id="offcanvasNav"> 
    
    <Navbar.Toggle />
<Navbar.Offcanvas
  id="offcanvasNav"
  aria-labelledby="offcanvasNavbar"
  placement="top"
  style={{width: "maxContent"}}
>
  <Offcanvas.Header>
    <Offcanvas.Title id="offcanvasNav"></Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Nav id="canbody">
<ul>
        <li>    <a href="#Home" className='bar'>Home</a></li>
        <li><a href="#About" className='bar'>About</a></li>
        <li><a href="#Pricing" className='bar'>Pricing</a></li>
        <li><a href="#Contact"className='bar' >Contact</a></li>
        <li><a href="#News" className='bar' >News</a></li>
        
</ul>
</Nav>
  </Offcanvas.Body>
</Navbar.Offcanvas>
</div>
  )
}

export default NavbarToggles;




//<AiOutlineAlignLeft id='menu-btn' /> 
