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
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sagittis ipsum. Cras tempus malesuada turpis a accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur dui in nunc bibendum dignissim. Mauris malesuada nisi nisi, nec imperdiet mauris pretium ac. Nunc commodo, magna nec rhoncus auctor, turpis dui congue dui, at maximus ligula quam at enim. Proin neque felis, tempor a hendrerit vitae, molestie sed velit. Nunc ut risus magna. In tincidunt nibh sapien, eu mollis nibh volutpat at. In placerat eu nunc in gravida. Phasellus sed interdum neque, quis viverra orci. Maecenas sollicitudin sollicitudin tempus. Fusce neque risus, cursus congue iaculis quis, elementum nec nulla. Pellentesque dapibus pellentesque justo, vitae scelerisque est tristique sit amet. Nullam ut porttitor neque, et rutrum odio.</p>
      </div>
    </div>
  )
}

export default About