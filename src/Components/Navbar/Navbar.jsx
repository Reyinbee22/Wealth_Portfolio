import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // WhatsApp link
  const whatsappLink = "https://wa.me/qr/MWES4MZCAGGQA1"; 

  const handleConnectClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <ul className="nav-menu">
        <li>
          <Link to="/" onClick={() => handleMenuItemClick("home")}>
            Home
          </Link>
          {menu === "home" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link to="/about" onClick={() => handleMenuItemClick("about")}>
            About Me
          </Link>
          {menu === "about" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link to="/services" onClick={() => handleMenuItemClick("services")}>
            Services
          </Link>
          {menu === "services" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link to="/work" onClick={() => handleMenuItemClick("work")}>
            Portfolio
          </Link>
          {menu === "work" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link to="/contact" onClick={() => handleMenuItemClick("contact")}>
            Contact
          </Link>
          {menu === "contact" ? <img src={underline} alt='' /> : null}
        </li>
      </ul>
      <div className="nav-connect" onClick={handleConnectClick}>
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
