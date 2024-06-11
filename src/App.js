import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <div className='bg'></div>
      <EventDetails />
      {/* <div className='bg2'></div> */}
      
      <Schedule />
      {/* <RSVP /> */}

      <div className='map p-5'>
        <h1 className='display-1 i text-center text-white'>Location</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2900664994245!2d77.63482660000001!3d12.8890605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b9ec869fd1%3A0xe502eb43ff449523!2s1st%20Main%20Rd%2C%20Mico%20Layout%2C%20Hongasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718129987192!5m2!1sen!2sin" width="600" height="450" className='w-100 rounded-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <img src='https://static.vecteezy.com/system/resources/thumbnails/010/985/457/small/gold-volumetric-3d-text-balloons-thank-you-cut-out-png.png' className='thanks'/>
      <Footer />
    </div>
  );
}

export default App;
