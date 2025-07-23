import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaVenusMars, FaCamera, FaGoogle, FaPhone } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (email.trim()) {
      console.log("Navigating to OTP page with email:", email);
      navigate('/otp', { state: { email } });
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="curve-image-wrapper">
          <img src={assets.layer2} alt="curve" className="curve-top-img" />
          <h2 className="register-header">REGISTER</h2>
        </div>

        <div className="photo-upload">
          <div className="photo-circle">
            <FaCamera size={24} />
            <span>PHOTO</span>
          </div>
        </div>

        <div className="form-section">
          <div className="input-block">
            <div className="icon-with-label">
              <FaUser className="input-icon" />
              <label>NAME</label>
            </div>
            <input type="text" />
            <div className="underline underline-yellow"></div>
          </div>

          <div className="input-block">
            <div className="icon-with-label">
              <FaEnvelope className="input-icon" />
              <label>EMAIL</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaGoogle className="google-icon" />
            <div className="underline"></div>
          </div>

          <div className="input-block">
            <div className="icon-with-label">
              <FaPhone className="input-icon" />
              <label>PHONE</label>
            </div>
            <input type="tel" />
            <div className="underline"></div>
          </div>

          <div className="input-block">
            <div className="icon-with-label">
              <FaVenusMars className="input-icon" />
              <label>GENDER</label>
            </div>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <div className="underline"></div>
          </div>

          <div className="signup-button-wrapper">
            <button className="signup-button" onClick={handleSignup}>
              SIGN UP
            </button>
          </div>

          <p className="signin-text">
            Already have an account? <span>SIGN IN</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;