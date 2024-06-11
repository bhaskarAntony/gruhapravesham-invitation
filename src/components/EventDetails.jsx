import React from 'react';
// import './EventDetails.css';
// import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function EventDetails() {
  return (
    <section className="EventDetails text-center py-5 p-3 p-md-5">
      <h2 className='display-1 text-white i'>Event Details</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <FaClock size="3em" /> */}
           <div className="date" data-aos="fade-down-right">
           <h3 className='i fw-bold mt-4 display-1'>Date and Time</h3>
            <ul className="list-unstyled">
              <li>Gruhapravesha: 5:00 am</li>
              <li>Sathyanarayana Swamy Pooja: 10:30 am</li>
              <li>Lunch: 12:30 noon</li>
            </ul>
           </div>
          </div>
          <div className="col-md-4">
            {/* <FaMapMarkerAlt size="3em" /> */}
            <div className="date" data-aos="fade-down-right">
            <h3 className='i mt-4 display-1'>Location</h3>
            <p>#18, 1st cross, 1st Main, Muneshwara layout,<br />Attached to Raghavendra Layout, Chikka Beguru,<br />Bangalore 560068</p>
            </div>
          </div>
          <div className="col-md-4">
            {/* <FaPhoneAlt size="3em" /> */}
          <div className="date" data-aos="fade-down-right">
          <h3 className='i mt-4 display-1'>Contact</h3>
          <p>Phone: 9060664922</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
