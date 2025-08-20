import React from 'react';
import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function PersonalTraining() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // normal speed
    }
  }, []);

  return (
    <div id='personal' className="flex flex-col lg:flex-row min-h-screen bg-black pt-10">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-16 py-8 md:py-10 lg:py-12 order-1">
        {/* Badge */}
        <div className="inline-flex mb-6 md:mb-8">
          <span className="px-4 md:px-6 py-2 bg-transparent border border-gray-600 rounded-full text-white text-sm font-medium">
            One-on-One Training
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-stone-200 leading-tight mb-8 md:mb-10 lg:mb-12">
          Achieve your goals faster with personalized training sessions
        </h1>

        {/* Features List */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="text-white text-base md:text-lg font-medium">
              Customized workout plans
            </span>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="text-white text-base md:text-lg font-medium">
              Expert form correction & guidance
            </span>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="text-white text-base md:text-lg font-medium">
              Flexible scheduling options
            </span>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="text-white text-base md:text-lg font-medium">
              Progress tracking & accountability
            </span>
          </div>
        </div>
      </div>

      {/* Right Video Section */}
      <div className="flex-1 relative rounded-4xl overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-full order-2">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
          }}
        >
          <source src="/Personal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>
    </div>
  );
}