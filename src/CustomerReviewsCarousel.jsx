/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 9.5,
      review: "FitnessShark has completely transformed my fitness journey! The trainers are incredibly knowledgeable and the community is so supportive. I've never felt stronger!",
      image: "https://i.insider.com/64bad6b0bea34400195eae96?width=700w=150&h=150&fit=crop&crop=face",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 10,
      review: "Best gym experience I've ever had! The equipment is top-notch, classes are challenging yet fun, and I've achieved results I never thought possible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 9.2,
      review: "The personal training sessions are amazing! My trainer pushes me to be my best while keeping workouts enjoyable. Highly recommend FitnessShark!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 9.8,
      review: "Incredible facility with an even better community. The variety of classes keeps me motivated and the results speak for themselves. Love this place!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Miami, FL"
    },
    {
      id: 5,
      name: "Jessica Williams",
      rating: 9.7,
      review: "FitnessShark isn't just a gym, it's a lifestyle change. The nutrition guidance combined with amazing workouts has completely transformed how I feel about fitness.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      location: "Austin, TX"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-300" />
      );
    }

    return stars;
  };

  const getCardClass = (index) => {
    const position = index - currentIndex;

    // Mobile: Simple slide approach - only show current card
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      return position === 0 ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-0";
    }

    // Desktop: 3D carousel effect
    if (position === 0) {
      return "opacity-100 scale-100 z-20";
    }
    else if (position === -1 || (currentIndex === 0 && index === reviews.length - 1)) {
      return "opacity-80 scale-90 z-10 -translate-x-32 -rotate-y-12";
    }
    else if (position === 1 || (currentIndex === reviews.length - 1 && index === 0)) {
      return "opacity-80 scale-90 z-10 translate-x-32 rotate-y-12";
    }
    else if (position === -2 || (currentIndex === 1 && index === reviews.length - 1)) {
      return "opacity-50 scale-80 z-0 -translate-x-64 -rotate-y-24";
    }
    else if (position === 2 || (currentIndex === reviews.length - 2 && index === 0)) {
      return "opacity-50 scale-80 z-0 translate-x-64 rotate-y-24";
    }
    else {
      return "opacity-0 scale-75 z-0";
    }
  };

  return (
    <div id='review' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
            What Our Members Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real reviews from real people who transformed their lives at FitnessShark
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={handlePrev}
            className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 lg:p-3 transition-all duration-300 hover:scale-110"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 lg:p-3 transition-all duration-300 hover:scale-110"
            disabled={isAnimating}
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>

          {/* Reviews Container */}
          <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center perspective-1000">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute w-[280px] sm:w-[320px] md:w-80 lg:w-96 transition-all duration-700 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] transform ${getCardClass(index)}`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  {/* User Info */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover mr-4 sm:mr-6 border-2 border-yellow-400"
                    />
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900">{review.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{review.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="flex space-x-1 mr-3 sm:mr-4">
                      {renderStars(review.rating)}
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-md">
                      {review.rating}/10
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed line-clamp-4 sm:line-clamp-5">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Quote decoration */}
                  <div className="absolute top-3 sm:top-4 right-4 sm:right-6 text-4xl sm:text-5xl lg:text-6xl text-gray-200 font-serif">
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6 md:hidden">
          <button
            onClick={handlePrev}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">9.6/10</div>
            <div className="text-gray-300 text-sm sm:text-base">Average Rating</div>
          </div>
          <div className="text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">2,500+</div>
            <div className="text-gray-300 text-sm sm:text-base">Happy Members</div>
          </div>
          <div className="text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">98%</div>
            <div className="text-gray-300 text-sm sm:text-base">Would Recommend</div>
          </div>
        </div>
      </div>
    </div>
  );
}