
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './SplashScreen.css';

const Splash = () => {
    const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate('/Nike'); 
    }, 4000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);
  return (
    <div className="fullscreen-wrapper">
      <div className="splash-container">
        <div className="splash-box">
          <img src={assets.logo} alt="GTROI Logo" className="splash-logo animate-logo" />
        </div>
      </div>
    </div>
  );
};

export default Splash;

