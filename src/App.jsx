import React, { useEffect } from 'react';
import './App.css'
import Nav from './assets/components/Nav.jsx'
import Home from './assets/components/Home.jsx'
import About from './assets/components/About.jsx'
import Games from './assets/components/Games.jsx'
import Contact from './assets/components/Contact.jsx'
import Controls from './assets/components/Controls.jsx';

function App() {

  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);
  return(
    <>
    <Nav/>
    <Home/>
    <About/>
    <Games/>
    <Contact/>
    {/* <Controls/> */}
    </>
  )
}

export default App
