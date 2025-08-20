import React from 'react'

import { Link } from 'react-scroll';


const Offers = () => {
  const services = [
    {
      title: "Zumba Classes",
      image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Diet Planning",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className='min-h-screen bg-black text-white py-16 px-6'>
      <style>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      <div className='max-w-[1500px] mx-auto'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h1
            className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text inline-block leading-tight py-10'
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.3) 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              animation: 'shine 8s linear infinite'
            }}
          >
            We offer something for everybody
          </h1>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='relative h-90 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className='absolute inset-0 w-full h-full object-cover brightness-75 saturate-90'
              />

              {/* Overlay (simplified) */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>

              {/* Title */}
              <div className='relative z-20 h-full flex items-end p-6'>
                <h3 className='text-2xl md:text-3xl font-bold text-white leading-tight'>
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <Link
  to="services" 
  smooth={true}
  duration={500}
  className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
>
  Explore Our Services
</Link>
        </div>
      </div>
    </div>
  )
}

export default Offers
