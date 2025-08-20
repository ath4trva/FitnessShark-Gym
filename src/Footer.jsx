import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="FitnessShark Logo" 
                className="w-12 h-12 mr-3"
              />
              <span className="text-2xl font-bold text-white">FitnessShark</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your fitness journey with state-of-the-art facilities, expert trainers, 
              and a supportive community dedicated to helping you achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pink-600 text-white p-3 rounded-full transition duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-400 text-white p-3 rounded-full transition duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-red-600 text-white p-3 rounded-full transition duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Membership Plans',
                'Personal Training',
                'Group Classes',
                'Nutrition Coaching',
                'Success Stories'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Strength Training',
                'Cardio Workouts',
                'Yoga & Pilates',
                'Zumba Classes',
                'Boxing & MMA',
                'Swimming Pool',
                'Sauna & Steam'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Shop No. 12, Sector 17<br />
                  Vashi, Navi Mumbai<br />
                  Maharashtra 400703
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+912222222222" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                  +91 22 2222 2222
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:info@fitnessshark.com" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                  info@fitnessshark.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for fitness tips and exclusive offers</p>
            </div>
            <div className="flex-1 w-full lg:max-w-md">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FitnessShark. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;