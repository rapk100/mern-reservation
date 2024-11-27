import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css"; // Import your CSS file for styling

const Success = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return (
      <div className="success-container">
        <h1>Reservation Successful</h1>
        <p>Thank you for your reservation!</p>
      </div>
    );
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    dish,
  } = state;

  return (
    <div className="success-container">
      <h1>Reservation Details</h1>
      <div className="reservation-details">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Dish:</strong> {dish}</p>
        <p>"Thank you for your dining reservation! We are excited to host you."</p>
      </div>
    </div>
  );
};

export default Success;
