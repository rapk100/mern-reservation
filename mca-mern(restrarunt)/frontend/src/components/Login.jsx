import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);
  const navigate=useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/send", {
        email,
        password
      });
      console.log(response.data);
      setRegistered(true); // Set registered to true to trigger redirection
    } catch (error) {
      setError(error.response.data); // Display error message from backend
    }
  };

  if (registered) {
    navigate("/")
  }

  return (
    <div className="main-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className='login'>Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default Login;
