'use client';

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import heroA  from '../../assets/WebsiteImage/heroA.jpg'

export default function HeroSection() {
  // Value Comparison Slider State
  // const [currentSlide, setCurrentSlide] = useState(0);
  //   const [translateX, setTranslateX] = useState(0)
  // const totalSlides = 3;

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };





    const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 3; // Kitne slides hai
  const translateX = -currentSlide * 100; // Slide ka offset

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <Link to={"/PatientPortal"} className="text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer font-medium">
                Patient Portal
              </Link>
              <Link to={"/PractitionerPortal"} className="text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer font-medium">
                Practitioner Portal
              </Link>
              <Link to={"/Login"} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer whitespace-nowrap font-medium">
                Admin Portal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Image with better positioning and lighter overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
          {/* <img 
            src="https://readdy.ai/api/search-image?query=Professional%20caring%20Australian%20doctor%20with%20stethoscope%20gently%20examining%20elderly%20patient%20in%20bright%20modern%20medical%20clinic%2C%20warm%20sunlight%20streaming%20through%20large%20windows%2C%20clean%20white%20medical%20environment%20with%20natural%20lighting%2C%20compassionate%20healthcare%20consultation%20showing%20trust%20and%20care%2C%20professional%20medical%20setting%20with%20soft%20lighting%20and%20comfortable%20atmosphere%2C%20doctor%20showing%20genuine%20concern%20for%20patient%20wellbeing&width=1400&height=800&seq=hero-clear-medical-002&orientation=landscape"
            alt="Professional doctor providing compassionate medical care"
            className="w-full h-full object-cover object-center opacity-30"
          /> */}

          <img src={heroA} alt="Professional doctor providing compassionate medical care"
            className="w-full h-full object-cover object-center opacity-30"/>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2 mb-8">
              <i className="ri-map-pin-line text-emerald-600 mr-2"></i>
              <span className="text-sm font-semibold text-emerald-700">Available Australia-wide</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Australia's Most
              <span className="block text-indigo-600">
                Affordable & Trusted
              </span>
              <span className="block text-4xl text-gray-700">Medical Certificate Platform</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl leading-relaxed">
              <span className="bg-amber-100 border border-amber-200 px-3 py-1 rounded-lg text-amber-800 font-semibold">Certificates within 30 minutes</span> • 
              Registered practitioners • Instant delivery • 
              <span className="font-semibold text-emerald-600">Australia's lowest prices</span> • 
              Supporting cancer research with every certificate
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/certificate/apply" 
                    className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <i className="ri-file-add-line mr-2"></i>
                Get Your Certificate Now
              </Link>
              <Link href="/verify" 
                    className="bg-white text-indigo-600 border-2 border-indigo-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-qr-scan-line mr-2"></i>
                Verify Certificate
              </Link>
            </div>
            
            {/* Pricing Highlight */}
            <div className="mt-16 grid grid-cols-2 gap-8 max-w-2xl">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$11.99</div>
                  <div className="text-emerald-600 font-semibold mb-2">Single-Day Certificate</div>
                  <div className="text-sm text-gray-600 mb-3">Top 2 lowest in Australia</div>
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs px-4 py-2 rounded-full inline-block">
                    Pharmacist Issued
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50/90 backdrop-blur-sm border-2 border-indigo-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                    AUSTRALIA'S LOWEST
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">$16.99</div>
                  <div className="text-indigo-700 font-semibold mb-2">Multi-Day (2-Day)</div>
                  <div className="text-sm text-indigo-600 mb-3">Cheapest in the market</div>
                  <div className="bg-indigo-100 border border-indigo-300 text-indigo-700 text-xs px-4 py-2 rounded-full inline-block">
                    Practitioner Issued
                  </div>
                </div>
              </div>
            </div>
            
            {/* Delivery Promise */}
            <div className="mt-12 bg-amber-50/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 max-w-2xl shadow-lg">
              <div className="flex items-center">
                <i className="ri-time-line text-4xl text-amber-600 mr-6"></i>
                <div>
                  <div className="text-gray-900 font-bold text-xl">30-minute delivery promise</div>
                  <div className="text-amber-700 text-sm mb-2">
                    Average delivery time: 30 minutes for single-day certificates
                  </div>
                  <div className="text-amber-600 text-xs">
                    Need support? Email: support@mediwishglobal.com.au
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Affordable, Trusted & Transparent Healthcare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Supporting our community with the lowest prices in Australia while maintaining the highest standards</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-shield-check-line text-4xl text-emerald-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">AHPRA Verified</h3>
              <p className="text-gray-600">Registered Practitioners Only</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-money-dollar-circle-line text-4xl text-indigo-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Lowest Prices</h3>
              <p className="text-gray-600">Australia's most affordable</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-heart-line text-4xl text-pink-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Cancer Support</h3>
              <p className="text-gray-600">$0.50 donated per certificate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-time-line text-4xl text-amber-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">30 Min Delivery</h3>
              <p className="text-gray-600">Quick & reliable service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Certificate Types We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Fast, affordable, and professionally issued certificates for all your needs</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-file-text-line text-4xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sick Leave Certificate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                Medical certificate for personal illness. Required for sick leave from work or study. 
                Issued by qualified practitioners within 30 minutes.
              </p>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-3">From $11.99</div>
                <div className="text-sm text-gray-500 mb-6">Single-day from pharmacist</div>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap text-lg">
                  Get Certificate
                </button>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-10 rounded-3xl shadow-2xl border-2 border-indigo-200 hover:shadow-3xl transition-all duration-300 lg:scale-110 z-10 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                  <i className="ri-star-line mr-1"></i>
                  MOST POPULAR
                </div>
              </div>
              <div className="w-24 h-24 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-parent-line text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Carer's Leave Certificate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                Certificate for caring for sick family members. Essential for carer's leave entitlements. 
                Professionally assessed and issued quickly.
              </p>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-3">From $11.99</div>
                <div className="text-sm text-gray-500 mb-6">Single-day from pharmacist</div>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap text-lg">
                  Get Certificate
                </button>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-24 h-24 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-graduation-cap-line text-4xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Sick Leave Certificate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                Special student certificates for educational institutions. Covers illness-related absences from school, 
                university, or training courses.
              </p>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-3">From $11.99</div>
                <div className="text-sm text-gray-500 mb-6">Single-day from pharmacist</div>
                <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap text-lg">
                  Get Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Clean%20modern%20medical%20office%20interior%20with%20professional%20healthcare%20equipment%2C%20bright%20medical%20consultation%20room%20with%20examination%20table%20and%20computer%2C%20organized%20medical%20facility%20with%20professional%20lighting%2C%20Australian%20medical%20clinic%20interior%20design%2C%20sterile%20healthcare%20environment%20with%20modern%20medical%20technology&width=1400&height=800&seq=medical-office-bg-001&orientation=landscape"
            alt="Professional medical office interior"
            className="w-full h-full object-cover object-center opacity-10"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-900 border border-emerald-700 rounded-full px-6 py-3 mb-8">
              <i className="ri-money-dollar-circle-line text-emerald-400 mr-2"></i>
              <span className="text-sm font-semibold text-emerald-300">Affordable & Transparent Pricing</span>
            </div>
            <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
              Save Money with
              <span className="block text-indigo-400">
                Australia's Lowest Prices
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted healthcare at unbeatable prices. Every certificate supports cancer research with automatic $0.50 donation. 
              No hidden fees, no surprises - just honest, transparent healthcare pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Single Day Pricing */}
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <i className="ri-calendar-line text-white text-4xl"></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                    <i className="ri-star-fill text-white text-sm"></i>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Single-Day Certificate</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold text-emerald-400">$11.99</span>
                    <span className="text-emerald-300 ml-2">AUD</span>
                  </div>
                  <p className="text-emerald-200">Top 2 lowest in Australia</p>
                </div>

                <ul className="space-y-4 text-gray-200 mb-10">
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>Pharmacist certified within 30 minutes</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>1-day duration coverage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>Instant email delivery</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-heart-line text-white text-xs"></i>
                    </div>
                    <span>$0.50 cancer research donation included</span>
                  </li>
                </ul>

                <button className="w-full bg-emerald-600 text-white py-5 px-8 rounded-2xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <i className="ri-shopping-cart-line mr-2"></i>
                  Get Single-Day Certificate
                </button>
              </div>
            </div>
            
            {/* Multi-Day Pricing - Popular */}
            <div className="bg-indigo-600/20 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border-2 border-indigo-400/50 hover:bg-indigo-600/25 transition-all duration-500 transform hover:-translate-y-2 relative">
              {/* Australia's Lowest Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                  <i className="ri-trophy-line mr-1"></i>
                  AUSTRALIA'S LOWEST
                </div>
              </div>

              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <i className="ri-calendar-2-line text-4xl text-white"></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center">
                    <i className="ri-crown-line text-white text-sm"></i>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Multi-Day (2-Day) Certificate</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold text-indigo-400">$16.99</span>
                    <span className="text-indigo-300 ml-2">AUD</span>
                  </div>
                  <p className="text-indigo-200">Cheapest multi-day in Australia</p>
                </div>

                <ul className="space-y-4 text-gray-200 mb-10">
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>Practitioner certified within 30 minutes</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>2-day duration coverage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span>Priority instant delivery</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-heart-line text-white text-xs"></i>
                    </div>
                    <span>$0.50 cancer research donation included</span>
                  </li>
                </ul>

                <button className="w-full bg-indigo-600 text-white py-5 px-8 rounded-2xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <i className="ri-star-line mr-2"></i>
                  Get Multi-Day Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Discounts Section */}
          <div className="mt-20 text-center">
            <h3 className="text-4xl font-bold text-white mb-12">Special Discounts Available</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-graduation-cap-line text-emerald-600 text-2xl"></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">Student Discount</h4>
                <p className="text-gray-300 text-sm mb-4">Valid student ID required</p>
                <div className="text-3xl font-bold text-emerald-400">20% OFF</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-cross-line text-indigo-600 text-2xl"></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">Frontline Workers</h4>
                <p className="text-gray-300 text-sm mb-4">Healthcare & essential workers</p>
                <div className="text-3xl font-bold text-indigo-400">15% OFF</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-building-line text-purple-600 text-2xl"></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">Corporate Packages</h4>
                <p className="text-gray-300 text-sm mb-4">Bulk certificate solutions</p>
                <div className="text-3xl font-bold text-purple-400">Contact Us</div>
              </div>
            </div>
          </div>

          {/* Donation Impact */}
          <div className="mt-16 text-center">
            <div className="bg-pink-900/30 backdrop-blur-sm rounded-2xl p-10 border border-pink-700/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mr-6">
                  <i className="ri-heart-line text-pink-600 text-2xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-xl">Supporting Cancer Research</h4>
                  <p className="text-pink-200">Every certificate includes a $0.50 donation to cancer support organizations</p>
                </div>
              </div>
              <div className="text-pink-300 font-semibold text-lg">
                Together we've donated $3,000+ to help fight cancer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Quick & Easy Access</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">No mandatory sign-up required. Get started with guest checkout or create an account for faster future visits.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <i className="ri-user-line text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Guest Checkout</h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Get your certificate without creating an account. Quick, simple, and secure.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-emerald-600 mr-3 text-lg"></i>
                  No registration required
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-emerald-600 mr-3 text-lg"></i>
                  Immediate certificate access
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-emerald-600 mr-3 text-lg"></i>
                  Email delivery within 30 minutes
                </div>
              </div>
              <Link href="/certificate/apply" className="block w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap text-center text-lg">
                Start as Guest
              </Link>
            </div>
            
            <div className="bg-indigo-50 p-10 rounded-3xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <i className="ri-user-heart-line text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Account</h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Save your information for faster future requests and track your certificate history.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-indigo-600 mr-3 text-lg"></i>
                  Faster repeat orders
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-indigo-600 mr-3 text-lg"></i>
                  Certificate history tracking
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-check-line text-indigo-600 mr-3 text-lg"></i>
                  Special member discounts
                </div>
              </div>
              <Link href="/patient/login" className="block w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap text-center text-lg">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value & Transparency Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-emerald-200/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/30 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-100 border border-emerald-300 rounded-full px-6 py-3 mb-8">
              <i className="ri-medal-line text-emerald-600 mr-2"></i>
              <span className="text-sm font-semibold text-emerald-700">Maximum Value Promise</span>
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Fair & Transparent
              <span className="block text-indigo-600">Healthcare Pricing</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We provide high-quality medical certificate solutions at fair and transparent prices, 
              ensuring maximum value for your investment in your health and wellbeing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Fair Pricing */}
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="mb-8">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20a%20digital%20wallet%20with%20coins%20floating%20around%20it%2C%20clean%20white%20background%2C%20soft%20green%20and%20blue%20color%20scheme%2C%20professional%20healthcare%20finance%20concept%2C%20flat%20design%20style%20with%20subtle%20shadows%20and%20modern%20typography%20elements%20showing%20value%20and%20savings&width=400&height=400&seq=wallet-pricing-001&orientation=squarish"
                    alt="Fair pricing wallet illustration"
                    className="w-32 h-32 object-cover object-center mx-auto rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Fair Pricing</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg">
                  No hidden fees, no surprise charges. What you see is what you pay - 
                  Australia's most transparent medical certificate pricing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">No setup or processing fees</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span>All-inclusive certificate pricing</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span>Charity donation included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Value */}
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-indigo-200 relative overflow-hidden lg:scale-110">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                  <i className="ri-star-line mr-1"></i>
                  BEST VALUE
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="mb-8 mt-4">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20a%20price%20tag%20with%20percentage%20discount%20symbols%20and%20Australian%20dollar%20signs%2C%20clean%20white%20background%2C%20vibrant%20blue%20and%20indigo%20color%20scheme%2C%20professional%20healthcare%20savings%20concept%2C%20flat%20design%20style%20with%20modern%20geometric%20elements%20showing%20value%20and%20affordability&width=400&height=400&seq=price-tag-value-001&orientation=squarish"
                    alt="Best value price tag illustration"
                    className="w-32 h-32 object-cover object-center mx-auto rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Best Value</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg">
                  Competitive rates that beat traditional medical centers - 
                  save up to 40% while getting the same professional service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-indigo-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">Up to 40% savings vs clinics</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-indigo-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">Student & worker discounts</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-indigo-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">Bulk pricing available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Investment */}
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="mb-8">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20golden%20coins%20stacked%20with%20upward%20trending%20arrow%20and%20investment%20growth%20symbols%2C%20clean%20white%20background%2C%20warm%20gold%20and%20amber%20color%20scheme%2C%20professional%20healthcare%20investment%20concept%2C%20flat%20design%20style%20with%20financial%20growth%20elements%20showing%20return%20on%20investment&width=400&height=400&seq=coins-investment-001&orientation=squarish"
                    alt="Investment value coins illustration"
                    className="w-32 h-32 object-cover object-center mx-auto rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Smart Investment</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg">
                  Every certificate represents maximum value for your investment, 
                  with fast service and professional quality that protects your time and job.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-amber-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">30-minute delivery guarantee</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-amber-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">Professional practitioner review</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-amber-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">Job protection guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Value Comparison Slider */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Value Comparison</h3>
              <p className="text-gray-600 text-lg">See how we deliver maximum value compared to traditional options</p>
            </div>

            {/* Slider Container */}
            <div className="relative">
              {/* Slider Wrapper */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}

                >
                  {/* Slide 1: Traditional GP Visit */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto max-w-md">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-200/30 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative">
                        <div className="mb-6">
                          <img 
                            src="https://readdy.ai/api/search-image?query=Professional%20medical%20clinic%20interior%20with%20doctor%20examining%20patient%2C%20traditional%20healthcare%20setting%20with%20white%20coat%20doctor%20and%20stethoscope%2C%20expensive%20private%20medical%20consultation%20room%2C%20formal%20medical%20environment%20with%20examination%20table%20and%20medical%20equipment%2C%20high-end%20healthcare%20facility&width=300&height=200&seq=traditional-gp-001&orientation=landscape"
                            alt="Traditional GP clinic visit"
                            className="w-full h-32 object-cover object-center rounded-xl shadow-md mb-4"
                          />
                          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                            <i className="ri-hospital-line text-red-600 text-2xl"></i>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Traditional GP Visit</h4>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          Visit physical clinic, wait for hours, pay high consultation fees, 
                          and deal with appointment scheduling difficulties. Traditional but expensive approach.
                        </p>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center justify-center">
                            <i className="ri-time-line text-red-500 mr-2"></i>
                            <span>2-3 hour wait time</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-car-line text-red-500 mr-2"></i>
                            <span>Travel to clinic required</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-calendar-line text-red-500 mr-2"></i>
                            <span>Limited appointment slots</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: MediWish Online */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto max-w-md">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                          <i className="ri-star-line mr-1"></i>
                          OUR SERVICE
                        </span>
                      </div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-green-200/30 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative">
                        <div className="mb-6 mt-2">
                          <img 
                            src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20showing%20digital%20medical%20certificate%20app%20interface%2C%20person%20relaxing%20at%20home%20using%20online%20healthcare%20service%2C%20comfortable%20home%20environment%20with%20laptop%20and%20mobile%20device%2C%20digital%20health%20technology%2C%20convenient%20online%20medical%20consultation%20from%20couch&width=300&height=200&seq=mediwish-online-001&orientation=landscape"
                            alt="MediWish online service from home"
                            className="w-full h-32 object-cover object-center rounded-xl shadow-md mb-4"
                          />
                          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                            <i className="ri-smartphone-line text-green-600 text-2xl"></i>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">MediWish Online</h4>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          Complete everything from home comfort. Fast, affordable, and professionally 
                          issued certificates by registered practitioners. Australia's most convenient option.
                        </p>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center justify-center">
                            <i className="ri-time-line text-green-600 mr-2"></i>
                            <span>30 minute delivery</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-home-line text-green-600 mr-2"></i>
                            <span>Complete from home</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-24-hours-line text-green-600 mr-2"></i>
                            <span>Available 24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3: Walk-in Clinic */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto max-w-md">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/30 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative">
                        <div className="mb-6">
                          <img 
                            src="https://readdy.ai/api/search-image?query=Busy%20walk-in%20medical%20clinic%20waiting%20room%20with%20patients%20sitting%20and%20waiting%2C%20crowded%20healthcare%20facility%20with%20long%20queues%2C%20medical%20center%20reception%20area%20with%20multiple%20people%20waiting%20for%20service%2C%20clinical%20healthcare%20environment%20with%20waiting%20chairs&width=300&height=200&seq=walkin-clinic-001&orientation=landscape"
                            alt="Walk-in clinic waiting room"
                            className="w-full h-32 object-cover object-center rounded-xl shadow-md mb-4"
                          />
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                            <i className="ri-building-2-line text-blue-600 text-2xl"></i>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Walk-in Clinic</h4>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          No appointments needed but long wait times expected. Moderate pricing 
                          but limited weekend availability and additional travel costs involved.
                        </p>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center justify-center">
                            <i className="ri-time-line text-blue-500 mr-2"></i>
                            <span>1-4 hour wait time</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-calendar-close-line text-blue-500 mr-2"></i>
                            <span>Weekend availability limited</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <i className="ri-gas-station-line text-blue-500 mr-2"></i>
                            <span>Additional travel costs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"
              >
                <i className="ri-arrow-left-s-line text-xl text-gray-600"></i>
              </button>
              <button 
                onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"
              >
                <i className="ri-arrow-right-s-line text-xl text-gray-600"></i>
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index 
                      ? 'bg-indigo-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Bottom Section */}
            <div className="mt-12 text-center">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6">
                    <i className="ri-trophy-line text-emerald-600 text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold text-emerald-800 mb-2">Professional Medical Certificates</h4>
                    <p className="text-emerald-700">Registered practitioners ensuring quality healthcare solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-8">
                <img 
                  src="https://static.readdy.ai/image/d02d88b0d280feb932d3d4db548036a1/e03fc4111da8fa0a9a095e83112fcc2c.jfif"
                  alt="Medical Certificate Platform"
                  className="h-16 w-auto mr-3"
                  style={{ width: '300px', height: 'auto' }}
                />
                <span className="text-2xl font-['Pacifico'] text-white">Medical Certificate Platform</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">Australia's most affordable medical certificate platform. Available Australia-wide with registered practitioners delivering secure, compliant healthcare solutions.</p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-700 hover:bg-indigo-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-line text-white"></i>
                </button>
                <button className="w-12 h-12 bg-gray-700 hover:bg-indigo-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-line text-white"></i>
                </button>
                <button className="w-12 h-12 bg-gray-700 hover:bg-indigo-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-line text-white"></i>
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 text-white">Certificate Types</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="/sick-leave" className="hover:text-white transition-colors cursor-pointer">Sick Leave Certificate</Link></li>
                <li><Link href="/carers-leave" className="hover:text-white transition-colors cursor-pointer">Carer's Leave Certificate</Link></li>
                <li><Link href="/student-certificate" className="hover:text-white transition-colors cursor-pointer">Student Sick Leave Certificate</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors cursor-pointer">Verify Certificate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 text-white">Support & Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="/faq" className="hover:text-white transition-colors cursor-pointer">FAQ & Support</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing & Discounts</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors cursor-pointer">How It Works</Link></li>
                <li><a href="mailto:support@mediwishglobal.com.au" className="hover:text-white transition-colors cursor-pointer">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 text-white">Legal & Compliance</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
                <li><Link href="/practitioners" className="hover:text-white transition-colors cursor-pointer">For Practitioners</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors cursor-pointer">Data Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-lg">&copy; 2024 Medical Certificate Platform. Available Australia-wide medical certification platform.</p>
            <p className="text-gray-500 mt-3">ABN: 12 345 678 901 | Supporting cancer research with every certificate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}