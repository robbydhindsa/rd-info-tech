import React from 'react'

import { Link } from 'react-router-dom';


import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='left-navbar'>
        <Link to='/'>
          <img
            className='logo'
            src={require('../images/sample-logo.png')}
            alt=''
          />
        </Link>
        <div className='logo-text'>RD Info Tech</div>
      </div>

      <div className='right-navbar'>
        <ul>
          {/* <li><a href='/home'>Home</a></li> */}
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>


        {/* <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a> */}
      </div>
    </div>

  )
}

export default Navbar