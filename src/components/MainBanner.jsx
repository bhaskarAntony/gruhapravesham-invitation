import React from 'react';
// import './MainBanner.css';
import video from '../videos/video.mp4'

function MainBanner() {
  return (
    <section className="MainBanner text-center text-white ">
      <video src={video} muted loop autoPlay  ></video>
      <div className="Banner-content py-5 p-4">
        <h1 className="display-10 fw-bold i">Gruha Pravesha</h1>
        {/* <h1>Join Us for the Celebration</h1> */}
        <h1 className="fs-3 fw-bold mt-5 ">Mrs. Asharani D N & Mr. Satish A</h1>
        <p className="fs-5">cordially invite you & your family to grace the occasion of Gruha Pravesha of our New Home - !!Shri Thandaveshwara Nilaya!!</p>
        <p>on Sunday, 16th June, 2024</p>
      </div>
    </section>
  );
}

export default MainBanner;
