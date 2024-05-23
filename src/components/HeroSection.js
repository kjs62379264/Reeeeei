import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>여행 길찾기</h1>
        <p>편한 여행길 도와드립니다</p>
        <div className='hero-btns'>
            <Button 
              to="/services"
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              시작
            </Button>
            
        </div>
    </div>
  )
  
}

export default HeroSection