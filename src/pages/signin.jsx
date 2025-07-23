import React from 'react';
import './SignIn.css';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

export default function SignIn() {
  const navigate = useNavigate(); 

  const handleSignUpClick = () => {
    navigate('/Register'); 
  };
  const handleSignUpClick2 = () => {
    navigate('/SplashScreen'); 
  }

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="curve-image-wrapper">
          <img src={assets.layer2} alt="curve" className="curve-top-img" />
          <div className="signin-header">SIGN IN</div>
        </div>

        <div className="photo-upload">
          <label htmlFor="photo-input">
            <div className="photo-circle">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/camera.png"
                alt="camera"
              />
              <p>PHOTO</p>
            </div>
          </label>
          <input type="file" id="photo-input" hidden />
        </div>

        <div className="input-group">
          <img
            src="https://img.icons8.com/ios-filled/25/ffffff/user.png"
            alt="user"
          />
          <input type="text" placeholder="NAME / EMAIL" />
        </div>

        <div className="input-group">
          <img
            src="https://img.icons8.com/ios-filled/25/ffffff/lock--v1.png"
            alt="lock"
          />
          <input type="password" placeholder="PASSWORD" />
        </div>

        <div className="forgot-password">
          <a href="#">FORGOT PASSWORD?</a>
        </div>
        <br />
        <br />

        <div className="signup-button-wrapper"onClick={handleSignUpClick2} >
          <button className="signin-btn">SIGN IN</button>
        </div>

        <div className="signup-text">
          Don’t have an account?{' '}
          <span onClick={handleSignUpClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            SIGN UP
          </span>
        </div>
      </div>
    </div>
  );
}
