import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a10f959e-6134-4c11-93e2-540b97104632");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Ready to elevate your project to the next level? As a seasoned full-stack developer, I'm here to turn your vision into reality. Contact me today and let's bring your ideas to life!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>basseyiyene@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>+2348104658570</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
          <div>{result}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
