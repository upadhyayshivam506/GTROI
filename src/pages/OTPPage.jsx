import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OTPPage.css';

const OTPPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    if (!email) {
        console.warn("No email passed to OTP page!")
        return (
            <div className="otp-container">
                <div className="otp-card">
                    <h2 className="otp-title">Error</h2>
                    <p className="otp-subtext">No email found. Please register again.</p>
                    <button className="otp-button" onClick={() => navigate('/')}>
                        Go Back
                    </button>
                </div>
            </div>
        );
        
        
    }
        
          const handleVerifyClick = () => {
            navigate('/SplashScreen'); 
          };

    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleVerify = () => {
        const fullOtp = otp.join('');
        console.log('Verifying OTP:', fullOtp);
    };

    return (
        <div className="otp-container">
            <div className="otp-card">

                <h2 className="otp-title">Verify</h2>
                <p className="otp-subtext">Your code was sent to you via email</p>
                <p className="otp-email">{email}</p>

                <div className="otp-box-group">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Backspace' && !otp[index] && index > 0) {
                                    inputsRef.current[index - 1].focus();
                                }
                            }}
                            className="otp-box-input"
                        />

                    ))}
                </div>
                <br />
                <br />

                <button onClick={handleVerifyClick} className="otp-button">
                    Verify
                </button>

                <p className="resend-text">
                    Didn’t receive code? <span className="resend-link">Request again</span>
                </p>
            </div>
        </div>
    );
};

export default OTPPage;
