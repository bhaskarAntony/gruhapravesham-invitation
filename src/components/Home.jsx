import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    education:"",
    address:"",
    course:"",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
      const response = await axios.post('https://stormy-flannel-nightgown-ox.cyclic.app/api/enquiry', formData);

      // Handle the response, e.g., show a success message
      console.log('Response:', response.data);
      setLoading(false)
      navigate('/succsess')  

      // Optionally, you can reset the form after successful submission
      setFormData({
        username: '',
        email: '',
        phone: '',
        education:"",
        address:"",
        course: '',
      });
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error:', error);
    }
  };
  return (
  <div className="conatiner register p-3">
   
    {
        loading ?(
            <div className="loader">
                <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        ):(
            <>
            <div className="row">
   <div className="col-md-6 offset-md-3">
   <div className="card p-3">
   <h1 className="fs-3">Application Form</h1>
    <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="mobile" className="form-label">
            Mobile number
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Mobile number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <select
           className="form-control p-3"
           name="course"
           placeholder="Interested course"
           value={formData.course}
           onChange={handleInputChange}
          >
            <option value="mern">MERN Fullstack</option>
            <option value="mean">MEAN Fullstack</option>
            <option value="python">PYTHON Fullstack</option>
            <option value="java">JAVA Fullstack</option>
            <option value="Ditital_marketing">Digital Marketing</option>
            <option value="data_science">Data Science</option>
            <option value="cloud">Cloud Oops</option>
          </select>
        
        </div>
        <div className="form-group mt-3">
          <label htmlFor="course" className="form-label">
            Education
          </label>
          <textarea 
           className="form-control"
           name="education"
           placeholder="Education Details"
           value={formData.education}
           onChange={handleInputChange}
          cols="30" rows="5"></textarea>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="course" className="form-label">
            Address
          </label>
          <textarea 
           className="form-control"
           name="address"
           placeholder="Address"
           value={formData.address}
           onChange={handleInputChange}
          cols="30" rows="5"></textarea>
        </div>
        <div className="form-control mt-3 border-0">
          <button type="submit" className="btn bg-warning text-dark p-3 rounded-3">
            Send Application
          </button>
        </div>
      </form>
    </div>
   </div>
    </div>
            </>
        )
    }
  </div>
  )
}

export default Home
