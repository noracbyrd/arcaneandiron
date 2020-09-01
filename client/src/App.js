import React from 'react';
import Logo from './components/Logo'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './components/About'
import Events from './components/Events'
import Playtest from './components/Playtest'
import MailingList from './components/MailingList'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div class="navbar-fixed"> */}
            <Nav />
            {/* </div> */}
      <div className='container'>
      <div className='row'></div>
      <div className='row'></div>
        <div className='row'>
      <Logo />
      </div>
         
        <div className='row'>
          <div className='col s12'>
            <p>Welcome to Arcane and Iron. This is the place to come for all things Arcane and Iron RPG! Whether you've played RPGs before or if this is your first one, a lot of adventures are in store! This is definitely filler text. I'm just filling it out for now. Yup. Filler. Eventually you'll be able to see episodes of our Podcast, Variant Rules, here, as well. And perhaps our spoof podcast, Variant Fools, as well. For now, just sit back, relax, and let your imagination be your guide!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <MailingList />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <About />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Events />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Playtest />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Contact />
          </div>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
