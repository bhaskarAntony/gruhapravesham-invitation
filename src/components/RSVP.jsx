import React, { useState } from 'react';
// import './RSVP.css';

function RSVP() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('RSVP Submitted');
  };

  return (
    <section className="RSVP text-center py-5">
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} className="form-control" placeholder="Number of Guests" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default RSVP;
