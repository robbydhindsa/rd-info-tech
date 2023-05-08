import React from 'react'
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='container'>
      <div className='left-navbar'>
        <img
          className='logo'
          src={require('../images/sample-logo.png')}
          alt=''
        />
        <div>RD Info Tech</div>
      </div>

      <div className='right-navbar'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
      </div>
    </div>

  )
}

export default Navbar