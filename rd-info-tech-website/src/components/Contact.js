import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.scss';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          console.log("Message sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-container'>
      <div className='contact-logo'>
        <img
          src={require('../images/sample-logo.png')}
          alt=''
        />
      </div>
      <div className='contact-form-container'>
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact