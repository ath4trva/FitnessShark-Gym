/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/submitLead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('Lead submitted successfully!');
        setForm({ name: '', email: '', phone: '', interest: '' });
      } else {
        setStatus('Error submitting lead');
      }
    } catch(err){
  console.error('Fetch error:', err);
  setStatus('Error submitting lead: ' + err.message);
}

  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Hi! We're a local CrossFit gym in Vashi, Navi Mumbai.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              FitnessShark Gym was started by Aaryan and Rohan in 2012. It's our mission to help people in Navi Mumbai get fit, stay healthy, and live life on their terms without fitness being an obstacle.
            </p>
            
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Claim your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">7 day free trial</span>
              </h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    autoComplete='on'
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    autoComplete='on'
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone number
                  </label>
                  <input
                    autoComplete='on'
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                    Membership interest...
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  >
                    <option value="" className="bg-gray-800">Select membership type</option>
                    <option value="basic" className="bg-gray-800">Basic Membership</option>
                    <option value="premium" className="bg-gray-800">Premium Membership</option>
                    <option value="unlimited" className="bg-gray-800">Unlimited Classes</option>
                    <option value="personal" className="bg-gray-800">Personal Training</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Submit
                </button>
              </form>

              {/* Status Message */}
              {status && <p className="mt-2 text-green-400">{status}</p>}
            </div>
          </div>
          
          {/* Google Map */}
          <div className="md:w-1/2 h-96 md:h-auto rounded-lg overflow-hidden shadow-xl border-2 border-blue-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241414.6053869495!2d72.86696575713582!3d19.015173231517846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1755582365098!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="CrossFit Gym Location"
              className="grayscale-[20%] contrast-[1.1] brightness-[0.9]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
