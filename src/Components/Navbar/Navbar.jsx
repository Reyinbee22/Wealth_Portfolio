import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleMenuItemClick = (section) => {
    setMenu(section);
    // Smooth scroll to the corresponding section
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnectClick = () => {
    // Implement the action you want to perform when "Connect With Me" is clicked
    console.log("Connect With Me clicked!");
    // For example, you can open a contact form or navigate to a contact page
  };

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <ul className="nav-menu">
        <li>
          <p onClick={() => handleMenuItemClick("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <p onClick={() => handleMenuItemClick("about")}>About Me</p>
          {menu === "about" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <p onClick={() => handleMenuItemClick("services")}>Services</p>
          {menu === "services" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <p onClick={() => handleMenuItemClick("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt=''/> : null}
        </li>
        <li>
          <p onClick={() => handleMenuItemClick("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt=''/> : null}
        </li>
      </ul>
      <div className="nav-connect" onClick={handleConnectClick}>Connect With Me</div>
    </div>
  );
}

export default Navbar;


