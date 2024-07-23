import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={ footer_logo} alt="" /> */}
            <p>As a burgeoning full stack developer with six months plus of immersive experience, hailing from Nigeria and having honed my skills at Univelcity, I'm poised to innovate and create impactful solutions in the tech landscape.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter Your Email' />
            </div>
           <div className="footer-subcribe">Subcribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Wealth Bassey. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
