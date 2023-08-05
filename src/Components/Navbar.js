import React from 'react'
import '../Styles/Navbar.css'
// import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCamera, faPencilRuler, faBars } from '@fortawesome/free-solid-svg-icons'
import navbarbg from '../Assets/Union.png'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-scroll'


export default function Navbar() {
  return (
    
        <div className='navbar'>
          <div className='navbarbg'>
            <img src={navbarbg} alt='navbarbg' />
          </div>
          <BrowserRouter>
          <nav>
            <Link to='home' spy={true} smooth={true}>
              <FontAwesomeIcon icon={faHome} color='#BDBDC0' />
            </Link>
            <Link to='about' spy={true} smooth={true}>
              <FontAwesomeIcon icon={faUser} color='#BDBDC0' />
            </Link>
            <Link to='photography' spy={true} smooth={true}>
              <FontAwesomeIcon icon={faCamera} color='#BDBDC0' />
            </Link>
            <Link to='design' spy={true} smooth={true}>
              <FontAwesomeIcon icon={faPencilRuler} color='#BDBDC0' />
            </Link>
            <Link to='footer' spy={true} smooth={true}>
              <FontAwesomeIcon icon={faBars} color='#BDBDC0' />
            </Link>
          </nav>
        </BrowserRouter>
        </div>

  )
}