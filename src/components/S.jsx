import React from 'react'
import '../styels/home.css'

function S() {
  return (
    <div className='container-fluid succsess-container'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="text-center  border-0">
                <img src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif" alt="" className='w-100' />
                <h1 className="fs-1 text-center">Thank You for Registering course</h1>
                <p className="text-center text-secondary fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo eum, amet facere sed labore, voluptatum quia aliquam dolorem minima velit hic dolorum laborum dolore, blanditiis asperiores magnam ut in.</p>
                <button className="btn bg-primary text-white mt-4">Visite to  Website</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default S
