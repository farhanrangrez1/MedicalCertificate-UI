import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


function Navbar() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

  return (
    <div>
       <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/d02d88b0d280feb932d3d4db548036a1/e03fc4111da8fa0a9a095e83112fcc2c.jfif"
                alt="Medical Certificate Platform"
                className="h-16 w-auto mr-3"
                style={{ width: '300px', height: 'auto' }}
              />
            </div>
            <nav className="flex space-x-8">
              <Link href="/patient/login" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer font-medium">
                Patient Portal
              </Link>
              <Link href="/practitioner/login" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer font-medium">
                Practitioner Portal
              </Link>
              <Link href="/admin/login" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer whitespace-nowrap font-medium">
                Admin Portal
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar