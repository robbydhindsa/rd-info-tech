import React from 'react'

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='left-navbar'>
        <a href='/'>
          <img
            className='logo'
            src={require('../images/sample-logo.png')}
            alt=''
          />
        </a>
        <div className='logo-text'>RD Info Tech</div>
      </div>

      <div className='right-navbar'>
        <ul>
          {/* <li><a href='/home'>Home</a></li> */}
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>


        {/* <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a> */}
      </div>
    </div>

  )
}

export default Navbar