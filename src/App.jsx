import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  const handleConnectClick = () => {
    // Implement the action you want to perform when "Connect With Me" is clicked
    console.log("Connect With Me clicked!"); // For debugging
  };
  
  return (
    <div>
      <Navbar  handleConnectClick={handleConnectClick} />
      <Hero  handleConnectClick={handleConnectClick} /> 
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
