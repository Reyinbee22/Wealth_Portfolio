import React from 'react';
import './Hero.css';
import image_icon from '../../assets/image_icon.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image_icon} alt="" />
      <h1><span>I'm Wealth Bassey,</span> FullStack developer based in Nigeria</h1>
      <p>I am a Full-Stack Developer with hands-on experience from Univelcity, Techwitclan Solutions, and Power Learn Project. Skilled in both front-end and back-end technologies, database management, and modern DevOps practices, I am passionate about building scalable, user-centric applications. Committed to continuous learning and innovation, I strive to deliver high-quality, impactful solutions in the ever-evolving tech landscape..</p>
      <div className="hero-action">
      <a href="mailto:basseyiyene@gmail.com" className="hero-connect">Connect with me</a>
      <a href="https://drive.google.com/file/d/1LazLPq1c5XXReoEVS0VfNXJ-rgoNhqv7/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hero-resume">My resume</a>
      </div>
    </div>
  );
}

export default Hero;
