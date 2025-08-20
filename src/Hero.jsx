import React from 'react';
import { Star } from 'lucide-react';
import ShinyText from './ShinyText';
import { Link } from 'react-scroll';

const Hero = () => {
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 lg:py-16">
        {/* Main Content */}
        <div className="text-white w-full max-w-6xl mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Crush 
            your health and fitness goals in no time
          </h1>
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2">
            <ShinyText
              text="It doesn't matter if your goal is to get stronger, burn fat, or to just stay fit — our world-class coaches will guide you every step of the way."
              disabled={false}
              speed={6}
              className="text-[#b5b5b5a4] bg-clip-text inline-block animate-shine text-base sm:text-lg md:text-xl lg:text-2xl font-light"
            />
          </h4>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Link
  to="contact"  // This should match your contact section's ID
  smooth={true}
  duration={1500}
  
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none cursor-pointer"
>
  Start 7 day free trial
</Link>
            
            
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-white w-full max-w-2xl px-2">
          {/* Star Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-1 sm:mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-stone-100 text-black bg-opacity-80 rounded-4xl px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
                83
              </div>
              <span className="text-sm sm:text-lg font-medium">five star reviews</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold text-black">JD</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-lg font-medium italic leading-relaxed">
                <span className="block sm:inline">"6 months after joining I lost 15lbs and</span>
                <span className="block sm:inline sm:ml-1">I'm getting stronger."</span>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;