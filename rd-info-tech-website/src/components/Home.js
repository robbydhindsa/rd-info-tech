import React from 'react'

import "./home.scss";

const Home = () => {
  return (
    <div className='homepage-container'>
      <img
        className='homepage-logo'
        src={require('../images/sample-logo.png')}
        // src={require('../images/sample-logo-white-blackborder.png')}
        alt=''
      />
      <h1>RD Info Tech Consulting</h1>
    </div>
  )
}

export default Home