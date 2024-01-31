import React, { useState } from 'react';
import '../styels/home.css'

const Enquiry = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    gender: '',
    dob:"",
    address:"",
    Gmobile:"",
    mobile:"",
    qualification:"",
    passing:"",
    course:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Implement your registration logic here
    console.log('Registration Data:', formData);
  };

  return (
  <div className="container-fluid enquiry bg-light justify-content-center">
     <div className="row  p-3  align-items-center bg-white rounded-3 border">
    <div className="col-12 col-md-6">
    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph" alt="" className="w-100" />
    </div>
    <div className="col-12 col-md-6">
        <div className="enquiry-right">
        <div>
      {step === 1 && (
        <div>
          <h2>May i know your information</h2>
          <label>
            Username:
           
          </label> <br />
          <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Your name'
            />
            <div className="d-flex flex-nowrap gap-2 align-items-center">
            
           <label htmlFor="" className="form-label w-100">
            select gender
           <select 
             name="gender"
             value={formData.gender}
             onChange={handleChange}
             className='form-control'
            >
                <option value="" selected disabled>Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>

            </select>
           </label>
             <label htmlFor="" className="form-label w-100">
                Date of birth
             <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Your name'
            />
             </label>
            </div>
            
        <div className="text-center d-flex gap-3 flex-wrap">
        <button onClick={handleNext} className='bg-warning btn text-white mt-3 w-100 fs-5'>Next</button>
        </div>
        </div>
      )}

      {step === 2 && (
     <div>
     <h2>Hello👋, <spam className="text-warning">{formData.username}</spam></h2>
     <p className="fs-6 text-secondary">May i Know your Address</p>

      <label htmlFor="" className="form-label w-100  mt-3">
        Address
      <textarea 
        name="address"
        value={formData.address}
        onChange={handleChange}
        className='form-control'
        placeholder='Enter Your Address'
       cols="30" rows="5"></textarea>
      </label>
   <div className="text-center d-flex gap-3 flex-wrap flex-md-nowrap">
   <button onClick={handlePrev} className='bg-dark btn text-white mt-3 w-100 fs-5'>Previous</button>
   <button onClick={handleNext} className='bg-warning btn text-white mt-3 w-100 fs-5'>Next</button>
   </div>
   </div>
      )}

      {step === 3 && (
         <div>
         <h2>Hi, <span className="text-warning">{formData.username}</span></h2>
         <p className="fs-6 text-secondary">Please fill your Basic Information</p>
         <label>
           Email
          
         </label> <br />
         <input
             type="text"
             name="email"
             value={formData.username}
             onChange={handleChange}
             className='form-control'
             placeholder='Enter Your name'
           />
                <div className="d-flex flex-nowrap gap-2 align-items-center">
            
            <label htmlFor="" className="form-label w-100">
             Mobile No
             <input
               type="tel"
               name="mobile"
               value={formData.mobile}
               onChange={handleChange}
               className='form-control'
               placeholder='000-0000-000'
             />
            </label>
              <label htmlFor="" className="form-label w-100">
                guardian's No
              <input
               type="tel"
               name="Gmobile"
               value={formData.Gmobile}
               onChange={handleChange}
               className='form-control'
               placeholder='000-0000-000'
             />
              </label>
             </div>
             <div className="d-flex flex-nowrap gap-2 align-items-center">
            
            <label htmlFor="" className="form-label w-100">
            Qualification
             <input
               type="tel"
               name="qualification"
               value={formData.qualification}
               onChange={handleChange}
               className='form-control'
               placeholder='Your Degree'
             />
            </label>
              <label htmlFor="" className="form-label w-100">
                year of passing
              <input
               type="date"
               name="passing"
               value={formData.passing}
               onChange={handleChange}
               className='form-control'
             />
              </label>
             </div>
       <div className="text-center d-flex gap-3 flex-wrap flex-md-nowrap">
       <button onClick={handlePrev} className='bg-dark btn text-white mt-3 w-100 fs-5'>Previous</button>
       <button onClick={handleNext} className='bg-warning btn text-white mt-3 w-100 fs-5'>Next</button>
       </div>
       </div>
      )}
       {step === 4 && (
         <div>
         <h2>Hi, <span className="text-warning">{formData.username}</span></h2>
         <p className="fs-6 text-secondary">Please fill your Basic Information</p>
        
                <div className="">
            
                <label className='w-100'>
           Course Intrested in
           <select
         name="course"
         value={formData.course}
         onChange={handleChange}
         className='form-control'
        >

            <option value="" disabled selected>Course</option>
            <option value="">Mern Fullstack</option>
            <option value="">Mean Fullstack</option>
            <option value="">Java Fullstack</option>
            <option value="">Python Fullstack</option>
            <option value="">Digital marketing</option>
            <option value="">Data Science</option>
            <option value="">Cloud Oops</option>
        </select>
         </label> <br />
      
        <label className='w-100'>
           Proffesional details
           <select
         name="course"
         value={formData.course}
         onChange={handleChange}
         className='form-control'
        >

            <option value="" disabled selected>Details</option>
            <option value="">Employed</option>
            <option value="">Unemployed</option>
            <option value="">Self Employed</option>
            <option value="">Student</option>
            
        </select>
          
         </label> <br />
      
             </div>
           
       <div className="text-center d-flex gap-3 flex-wrap flex-md-nowrap">
       <button onClick={handlePrev} className='bg-dark btn text-white mt-3 w-100 fs-5'>Previous</button>
       <button onClick={handleNext} className='bg-warning btn text-white mt-3 w-100 fs-5'>Next</button>
       </div>
       </div>
      )}
         {step === 5 && (
        
        <div className='text-center'>
        {/* <h1 className="fs-2">Submit Admission Form</h1> */}
       
       
        <button className='bg-warning btn text-white mt-3 w-100 fs-5 p-3 rounded-5'>Submit Form</button>
        <button onClick={handlePrev} className='bg-dark btn text-white mt-3 w-100 fs-5 p-3 rounded-5'>Previous</button>
        </div>
      )}
    </div>
        </div>
    </div>
   </div>
  </div>
  );
};

export default Enquiry;
