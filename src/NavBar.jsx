import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from './assets/logo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGymBenefitsOpen, setIsGymBenefitsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsGymBenefitsOpen(false);
  };

  const toggleGymBenefits = () => {
    setIsGymBenefitsOpen(!isGymBenefitsOpen);
  };

  // Scroll settings
  const scrollSettings = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -100, // Adjust this based on your header height
    onClick: closeMenu
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center text-white p-4 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center z-50 relative">
          <span className="mr-2">
            <img src={logo} alt="LOGO" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </span>
          <span className="text-3xl sm:text-3xl md:text-4xl lg:text-lg font-bold text-stone-100">
            FitnessShark
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-8 xl:space-x-12 font-medium text-lg xl:text-[17px] text-stone-100">
            {/* Gym Benefits with Dropdown */}
            <li className="relative group">
              <button 
                onClick={toggleGymBenefits}
                className="flex items-center space-x-1 hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                <span>Gym Benefits</span>
                <div className="relative w-4 h-4">
                  <ChevronDown 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                      isGymBenefitsOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <ChevronUp 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                      isGymBenefitsOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
              
              {/* Desktop Dropdown */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50 ${
                isGymBenefitsOpen 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-2 invisible'
              }`}>
                <div className="py-2">
                  {[
                    {name: 'Zumba Classes', id: 'services'},
                    {name: 'Strength Training', id: 'strength'},
                    {name: 'Personal Training', id: 'personal'},
                    {name: 'Diet Planning', id: 'diet'}
                  ].map((item, index) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      {...scrollSettings}
                      className={`block px-4 py-3 text-black hover:bg-white hover:bg-opacity-10 hover:text-yellow-400 transition duration-300 transform cursor-pointer ${
                        isGymBenefitsOpen 
                          ? 'translate-x-0 opacity-100' 
                          : '-translate-x-2 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Link to="membership" {...scrollSettings}>
                Membership
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Link to="review" {...scrollSettings}>
                Review
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Link to="contact" {...scrollSettings}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                {...scrollSettings}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 font-semibold text-lg cursor-pointer block text-center"
              >
                Start 7 day free trial
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 relative p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition duration-300"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Menu Items */}
          <div className="space-y-4">
            {/* Gym Benefits with Mobile Dropdown */}
            <div className={`transform transition-all duration-300 ease-out ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-4 opacity-0'
            }`}>
              <button
                onClick={toggleGymBenefits}
                className="flex items-center justify-between w-full text-stone-100 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-400 transition duration-300"
              >
                <span>Gym Benefits</span>
                <div className="relative w-4 h-4">
                  <ChevronDown 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                      isGymBenefitsOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <ChevronUp 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                      isGymBenefitsOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
              
              {/* Mobile Sub-dropdown */}
              <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                isGymBenefitsOpen 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {[
                  {name: 'Zumba Classes', id: 'services'},
                  {name: 'Strength Training', id: 'strength'},
                  {name: 'Personal Training', id: 'personal'},
                  {name: 'Diet Planning', id: 'diet'}
                ].map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    {...scrollSettings}
                    className={`block text-stone-300 text-base py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-400 transition duration-300 transform cursor-pointer ${
                      isGymBenefitsOpen 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-2 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Menu Items */}
            {[
              {name: 'Membership', id: 'membership'},
              {name: 'Review', id: 'review'},
              {name: 'Contact', id: 'contact'}
            ].map((item, index) => (
              <div
                key={item.id}
                className={`transform transition-all duration-300 ease-out ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <Link
                  to={item.id}
                  {...scrollSettings}
                  className="block text-stone-100 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-400 transition duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className={`pt-4 border-t border-gray-600 transform transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-4 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <Link 
              to="contact"
              {...scrollSettings}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 font-semibold text-lg cursor-pointer block text-center"
            >
              Start 7 day free trial
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default NavBar;