import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-scroll';

export default function MembershipPricing() {
  const pricingPlans = [
    {
      title: "Month to Month",
      price: "999",
      period: "/mo",
      features: [
        "All classes",
        "All member events", 
        "Full gym access"
      ],
      billingInfo: "Charges every month unless you cancel",
      buttonText: "Start 7 day free trial"
    },
    {
      title: "6 Month Membership", 
      price: "5,499",
      period: "/mo",
      features: [
        "All classes",
        "All member events",
        "Full gym access"
      ],
      billingInfo: "Charges every 6 months unless you cancel",
      buttonText: "Start 7 day free trial",
      isPopular: true
    },
    {
      title: "1 Year Membership",
      price: "7,999", 
      period: "/mo",
      features: [
        "All classes",
        "All member events",
        "Full gym access"
      ],
      billingInfo: "Charges every year unless you cancel",
      buttonText: "Start 7 day free trial"
    }
  ];

  return (
    <div id='membership' className="min-h-screen bg-black pt-40 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
            Ordering your health and fitness
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            goals starts here...
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                plan.isPopular ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {plan.title}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-green-600">
                    {plan.price}
                  </span>
                  <span className="text-2xl text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-900 text-lg font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Billing Info */}
              <div className="text-center mb-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.billingInfo}
                </p>
              </div>

              {/* CTA Button - Now a scrollable Link */}
              <div className="text-center">
                <Link
                  to="contact"
                  smooth={true}
                  duration={1500}
                  
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl cursor-pointer block"
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}