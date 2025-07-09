import React, { useState } from 'react';

export default function Booking() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleBooking = () => {
    alert(`Ride booked from ${pickup} to ${drop}`);
  };

  return (
    <div className="container mt-5">
      <h2>Book Your Ride</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Pickup Location"
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Drop Location"
        onChange={(e) => setDrop(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}