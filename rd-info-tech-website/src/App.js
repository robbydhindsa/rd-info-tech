import React from 'react'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.scss';


function App() {
  console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/contact":
      component = <Contact/>
      break
  }

  return (
    <div className='page-container'>
      <Navbar/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
