import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import image2_icon from '../../assets/image2_icon.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern}alt="" />
        </div>
        
        <div className="about-sections">
        <div className="about-left">
        <img src={image2_icon} alt="" />

        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a full stack developer, I thrive on architecting comprehensive solutions that seamlessly integrate front-end and back-end technologies to deliver robust and user-centric web applications.</p>
                <p>Coding across the entire software stack, I orchestrate innovative solutions that harmonize user experience with backend functionality, ensuring versatile and efficient web applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML&CSS</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:'50%'}}/></div>

            </div>

        </div>
        </div>
        
        
      <div className="about-achievements">
        <div className="about-achievement">
      <h1>6MONTHS+</h1>
     <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
     <h1>4+</h1>
     <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>4+</h1>
<p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
