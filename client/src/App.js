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
      <div class="navbar-fixed">
            <Nav />
            </div>
      <div className='container'>
      <div className='row'></div>
      <div className='row'></div>
        <div className='row'>
      <Logo />
      </div>
         
        <div className='row'>
          <div className='col s12'>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
