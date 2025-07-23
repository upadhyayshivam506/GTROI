import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin';
import Register from './pages/register';
import OTPPage from './pages/OTPPage';
import SplashScreen from './pages/SplashScreen';
import Nike from './pages/Nike';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/SplashScreen" element={<SplashScreen />}/>
        <Route path="/Nike" element={<Nike/>} />
      </Routes>
    </Router>
  );
};

export default App;


