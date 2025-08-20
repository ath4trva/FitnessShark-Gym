import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png'; // Replace with your actual logo path

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [liftUp, setLiftUp] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if user has visited before in this session
  

    // Mark as visited for this session
    sessionStorage.setItem('hasVisited', 'true');

    // Animation sequence
    const timer1 = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setLiftUp(true);
    }, 2500);

    const timer3 = setTimeout(() => {
      setContentVisible(true);
    }, 3200);

    const timer4 = setTimeout(() => {
      setShowSplash(false);
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!showSplash) {
    return (
      <div className={`${contentVisible ? 'content-fade-in' : 'opacity-0'}`}>
        {children}
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes liftUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        
        @keyframes contentFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .logo-animate {
          animation: logoFadeIn 1s ease-out forwards;
        }
        
        .lift-up {
          animation: liftUp 1s ease-in-out forwards;
        }
        
        .content-fade-in {
          animation: contentFadeIn 1.2s ease-out forwards;
        }
      `}</style>

      {/* Main Content - Always rendered but initially hidden */}
      <div 
        className={`${
          contentVisible ? 'content-fade-in' : 'opacity-0'
        }`}
      >
        {children}
      </div>

      {/* Splash Screen - Overlaid on top */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-transform duration-800 ease-in-out ${
          liftUp ? 'lift-up' : ''
        }`}
      >
        {/* Logo */}
        <div
          className={`text-center ${
            logoVisible ? 'logo-animate' : 'opacity-0'
          }`}
        >
          {/* Replace this with your actual logo */}
          <div className="mx-auto mb-4 flex items-center justify-center">
  <img src={logo} alt="LOGO" className="w-32 sm:w-40 md:w-48 h-auto" />
</div>

          
          {/* Optional brand name */}
          <h1 className="text-white text-3xl font-bold tracking-wider">
            FITNESS SHARK
          </h1>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;