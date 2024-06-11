import React from 'react';
// import './Schedule.css';

function Schedule() {
  return (
    <section className="Schedule text-center py-5 p-3 p-md-5">
      <h2 className='display-1 i text-white'>Schedule</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="timeline-item h-100">
              <span className="time d-block display-5 fw-bold">5:00 am</span>
              <span className="activity fs-4 d-block mt-3 i">Gruhapravesha</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="timeline-item h-100">
              <span className="time d-block display-5 fw-bold">10:30 am</span>
              <span className="activity fs-4 mt-3 d-block i">Sathyanarayana Swamy Pooja</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="timeline-item h-100">
              <span className="time d-block display-5 fw-bold">12:30 pm</span>
              <span className="activity fs-4 mt-3 d-block i">Lunch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
