import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern}alt="" />
        </div>
      <div className="services-container">
        {services_Data.map((services,index)=>{
            return <div key={index}className="services-format">
                <h3>{services.s_no}</h3>
                <h2>{services.s_name}</h2>
                <p>{services.s_desc}</p>
                
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
