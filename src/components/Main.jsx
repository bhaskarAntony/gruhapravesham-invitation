import React from 'react'
import '../styels/home.css'
import { useEffect } from 'react';
import { useState } from 'react';

function Main() {
    const [first, setFirst ] = useState(true)
    const [isFunctionActive, setIsFunctionActive] = useState(true);
    useEffect(() => {
        if (isFunctionActive) {
          const timeoutId = setTimeout(() => {
            // Your function logic goes here
            console.log('Function executed after some time');
            setFirst(false)
    
            // Close the function by updating state
            setIsFunctionActive(false);
          }, 3000); // Change 2000 to the desired delay in milliseconds
    
          // Cleanup function to clear the timeout when the component unmounts or when the function is closed
          return () => clearTimeout(timeoutId);
        }
      }, [isFunctionActive]);
  return (
    <div className='landing contaier-fluid'>
        {
            first ?(
                <div className="first bg-white container-fluid">
   <div className="row">
    <div className="col-md-6 offset-md-3">
    <img src="https://i.pinimg.com/originals/47/03/09/4703093a70ba47001bf2c86319aae091.gif" alt=""  className='w-100'/>
    <h1 className="fs-1">Walk in to <span className="text-warning">Be practical</span></h1>
    {/* <p className="fs-6 text-center text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit aspernatur eveniet officia alias doloribus culpa nihil facilis eaque et, atque rerum consequatur accusantium hic cum, cumque nisi similique at.
    </p> */}
    </div>
   </div>
</div>
            ):(
                <>
                  <a href="/equiry"><button className="btn bg-dark p-3 rounded-5 text-warning fs-6 fw-bold">EQUIRY FORM</button></a>
      <a href="/admission"><button className="btn bg-warning p-3 rounded-5 text-dark fs-6 fs-bold">ADMISSION FORM</button></a>
                </>
            )
        }
    
    </div>
  )
}

export default Main
