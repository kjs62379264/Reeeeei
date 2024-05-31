import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-links'>
            <div className="footer-link-wrapper">
                <div className="footer-links-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>만든사람들</Link>
                    <Link to='/'>서비스약관</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-links-items">
                <h2>Contact Us</h2>
                    <Link to='/'>연락처</Link>
                    <Link to='/'>지원</Link>
                    <Link to='/'>후원</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link 새='/' className="social-logo">
                        여행길<i className="fa-solid fa-city"></i>
                    </Link>
                </div>
                <small className="website-rights">Team AIM</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                          to='/'
                          target='_blank'
                          aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link youtube"
                          to='/'
                          target='_blank'
                          aria-label='Youtube'
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer