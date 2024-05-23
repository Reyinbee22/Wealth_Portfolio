import React from 'react'
import './Hero.css'
import image_icon from '../../assets/image_icon.png'


const Hero = () => {
  return (
    <div className='hero'>
      <img src={image_icon} alt="" />
      <h1><span>I'm Wealth Bassey,</span> FullStack developer based in Nigeria</h1>
      <p>I am a FullStack developer from Lagos, Nigeria with 2 months experience at Univelcity.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
