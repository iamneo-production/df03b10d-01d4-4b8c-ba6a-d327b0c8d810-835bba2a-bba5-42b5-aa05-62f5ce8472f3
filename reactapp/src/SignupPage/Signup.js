import React, { useState } from 'react';
import './Signupcss.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (signup logic) here
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Full Name:</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="form-footer">
          Already have an account? <Link to="/" className='line1'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;