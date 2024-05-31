import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>여행길 안내</h1>
        <p>모두를 위한 안전한 여행길이 되도록 도와드립니다 </p>
        <div className='hero-btns'>
            <Button 
              to="/services"
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              여행 시작하기
            </Button>
            
        </div>
    </div>
  )
  
}

export default HeroSection