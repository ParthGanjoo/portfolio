import React from 'react'
import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faBehance, faLinkedinIn, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className='footer' id='footer'>
          <div className='icons'>
            <a href="mailto:parth21342@iiitd.ac.in">
              <FontAwesomeIcon icon={faEnvelope} color='#BDBDC0'/>
            </a> 
            <a target="_blank" href="https://www.instagram.com/parthganjoophotography/">
              <FontAwesomeIcon icon={faInstagram} color='#BDBDC0'/> 
            </a>
            <a target="_blank" href="https://www.behance.net/ganjoo">     
              <FontAwesomeIcon icon={faBehance} color='#BDBDC0'/>   
            </a>   
            <a target="_blank" href="https://www.linkedin.com/in/parth-ganjoo-407003277/">  
              <FontAwesomeIcon icon={faLinkedinIn} color='#BDBDC0'/> 
            </a>
            <a target="_blank" href="https://github.com/ParthGanjoo">
              <FontAwesomeIcon icon={faGithub} color='#BDBDC0'/> 
            </a>  
            <a target="_blank" href="https://open.spotify.com/user/dt1fhkj1i7gxqbeb9igv7anxf">
              <FontAwesomeIcon icon={faSpotify} color='#BDBDC0'/> 
            </a>
          </div>
        </div>
  )
}
