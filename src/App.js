import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <div className='bg'></div>
      <EventDetails />
      {/* <div className='bg2'></div> */}
      
      <Schedule />
      {/* <RSVP /> */}
      
      <div className='map p-5' data-aos="fade-down">
        <h1 className='display-1 i text-center text-white'>Location</h1>
        
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.3545890072046!2d77.63217347507495!3d12.884905987422584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzA1LjciTiA3N8KwMzgnMDUuMSJF!5e0!3m2!1sen!2sin!4v1718251563751!5m2!1sen!2sin" width="600" height="450" className='w-100 rounded-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='bg'></div>
      <img src='https://cdn.pixabay.com/photo/2022/07/20/10/16/woman-7333869_1280.png' className='thanks mt-3' data-aos="flip-down"/>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/010/985/457/small/gold-volumetric-3d-text-balloons-thank-you-cut-out-png.png' className='thanks' data-aos="fade-up"/>
      <div className='bg'></div>
      <Footer />
    </div>
  );
}

export default App;
