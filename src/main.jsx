import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './NavBar.jsx';
import Hero from './Hero.jsx';
import hero from './assets/hero.jpg';
import Offers from './Offers.jsx';
import SplashScreen from './SplashScreen.jsx';
import Zumba from './Zumba.jsx'
import Strength from './Strength.jsx'; // Import the splash screen
import PR from './PR.jsx'; // Import the splash screen
import DietPlanning from './DietPlanning.jsx'; // Import the splash screen
import MembershipPricing from './MembershipPricing.jsx'; // Import the splash screen
import CustomerReviewsCarousel from './CustomerReviewsCarousel.jsx'; // Import the carousel component
import ContactSection from './ContactSection.jsx'; // Import the contact section
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplashScreen>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        
        {/* 🔳 Overlay with brightness effect */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        
        {/* 🔝 Content stays bright above the overlay */}
        <div className="relative z-10">
          <NavBar />
          <Hero />
        </div>
        
      </div>
      <Offers />
      <Zumba />
      <Strength />
      <PR/>
      <DietPlanning />
      <MembershipPricing />
      <CustomerReviewsCarousel />
      <ContactSection />
      <Footer />
    </SplashScreen>
  </StrictMode>
);