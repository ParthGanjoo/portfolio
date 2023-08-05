import React, { useEffect } from 'react'
import title from '../Assets/Title.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../Styles/Home.css'
import darkmoon from '../Assets/Moon@1.5x.png'
import lightmoon from '../Assets/Lit Up Moon@1.5x@1.5x.png'
import parth from '../Assets/4H0A9751@2x.jpg'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faBehance, faLinkedinIn, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function () {
  useEffect(() => {
    AOS.init({duration:1500});
  }, [])
  return (
    
    <div>
      <section id="home">
        <div className='home'>
          <div className="HeroName" >
          <h1>Parth<br/>&ensp;&ensp;&ensp;&nbsp;&nbsp;Ganjoo</h1>
          </div>
        </div>
          <div className="Moon" >
            <img src={lightmoon} id='lightmoonphoto'/>
            <img src={darkmoon} id='darkmoonphoto'/>
          </div>
      </section>

      <section id="about">
        <div className='about' data-aos='fade-up'>
          <p>I’m Parth, a 20 year old computer science and design student at IIIT Delhi. I'm a wildlife photographer, designer and developer.</p>
        </div>

        <form target="_blank" data-aos='fade-up'>
         <button type="submit" formaction="https://www.youtube.com" >More about me</button>
      </form>

      </section >
     
      <section id="photography">
        <div className='photography' data-aos='fade-up'>
          
            <a target="_blank" href='https://www.youtube.com' className='photographylink' >
          <h2 >
              Photography
          </h2>
            </a>
        </div>
      </section>

      <section id="design">
        <div className='design' data-aos='fade-up'>
        <a target="_blank" href='https://www.youtube.com' className='photographylink'>
          <h2>Design</h2>
          </a>
        </div>
      </section>

      <section id="extras">
        <div className='extras' data-aos='fade-up'>
          <div className='extrastext'>
            <p>Birdwatching since 2011, photographing wildlife since 2018 and passionate about designing things since forever, my interest in photography and design has been ever growing. I am always enthusiastic about going out in the wild and taking photos, involved in learning more about design and picking up new skills and knowledge. Other than this, I like to develop websites, and I play my guitar and sing sometimes. (P. S. The background of this website is a photo that I clicked from my terrace.)<br/> <br/>If you would like to work on a project together, go out for a photowalk, or even start a rock band, let me know!</p>
          </div>
          <div className='parthphoto'>
            <img src={parth} alt='parth' id='parthphotoend'/>
          </div>
        </div>
      </section> 

    </div >
  )
}
