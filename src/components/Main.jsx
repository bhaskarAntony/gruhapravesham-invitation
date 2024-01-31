import React from 'react'
import '../styels/home.css'

function Main() {
  return (
    <div className='landing'>
      <a href="/equiry"><button className="btn bg-dark p-3 rounded-5 text-warning fs-6 fw-bold">EQUIRY FORM</button></a>
      <a href="/admission"><button className="btn bg-warning p-3 rounded-5 text-dark fs-6 fs-bold">ADMISSION FORM</button></a>
    </div>
  )
}

export default Main
