import React from 'react';
import './Hero.css';
import image_icon from '../../assets/image_icon.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image_icon} alt="" />
      <h1><span>I'm Wealth Bassey,</span> FullStack developer based in Nigeria</h1>
      <p>I am a FullStack developer from Lagos, Nigeria with working experience at Univelcity.</p>
      <div className="hero-action">
      <a href="mailto:basseyiyene@gmail.com" className="hero-connect">Connect with me</a>
      <a href="https://drive.google.com/file/d/1LazLPq1c5XXReoEVS0VfNXJ-rgoNhqv7/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hero-resume">My resume</a>
      </div>
    </div>
  );
}

export default Hero;
