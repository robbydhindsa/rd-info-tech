import React from 'react'

import './about.scss';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-logo'>
        <img
          src={require('../images/sample-logo.png')}
          alt=''
        />
      </div>
      <div className='about-description'>
        <h2>About Us</h2>
        <p>Welcome to RD Info Tech Consulting, a leading information technology consulting firm dedicated to helping businesses optimize their technology infrastructure and harness its full potential. With our comprehensive range of IT consulting services, we empower organizations to navigate the ever-evolving digital landscape and achieve their strategic goals.</p>
        <h2>Services</h2>
        <p>RD Info Tech Consulting provides a range of specialized IT consulting services designed to meet the diverse needs of our clients. Our services include:</p>
        <ol>
          <li>Digital Transformation: We guide businesses through the process of digital transformation, enabling them to embrace disruptive technologies, improve operational efficiency, and deliver high-quality customer experiences.</li>
          <li>Web Development: Whether you need a simple informational website, an e-commerce platform, or a complex web application, our web developers combine technical extertise with creative flair to build visually stunning and user-friendly websites to deliver a seamless browsing experience.</li>
          <li>Data Analytics: Our team of data analysts empowers businesses to gain valuable insights from their vast amounts of data, enabling informed decision-making and driving growth.</li>
        </ol>
      </div>
    </div>
  )
}

export default About