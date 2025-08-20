    
'use client';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function PractitionerDashboard() {
  const [stats] = useState({
    pendingCertificates: 12,
    todayApprovals: 8,
    weeklyEarnings: 680,
    totalCertificates: 156,
    averageRating: 4.8,
    responseTime: '15 min'
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pendingRequests = [
    { id: 'MC-2024-0234', patient: 'Sarah Wilson', type: 'Sick Leave', duration: '2 days', submitted: '10 min ago', priority: 'Standard' },
    { id: 'MC-2024-0235', patient: 'Michael Johnson', type: 'Carer\'s Leave', duration: '3 days', submitted: '25 min ago', priority: 'Urgent' },
    { id: 'MC-2024-0236', patient: 'Emma Davis', type: 'Sick Leave', duration: '1 day', submitted: '1 hour ago', priority: 'Standard' },
    { id: 'MC-2024-0237', patient: 'James Brown', type: 'Student Leave', duration: '4 days', submitted: '2 hours ago', priority: 'Standard' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Practitioner Sidebar */}
      <div className={`bg-green-600 shadow-xl transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-20'} flex-shrink-0`}>
        <div className="p-6 border-b border-green-500">
          <div className="flex items-center justify-between">
            {sidebarOpen ? (
              <>
                <Link href="/" className="flex items-center cursor-pointer group">
                  <img 
                    src="https://static.readdy.ai/image/d02d88b0d280feb932d3d4db548036a1/e03fc4111da8fa0a9a095e83112fcc2c.jfif"
                    alt="Medical Certificate Platform"
                    className="h-12 w-auto mr-3 group-hover:scale-110 transition-transform"
                    style={{ width: '200px', height: 'auto' }}
                  />
                  <div>
                    <div className="text-xs text-green-200">Practitioner Portal</div>
                  </div>
                </Link>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-green-500 rounded-lg cursor-pointer text-green-200 hover:text-white transition-all"
                >
                  <i className="ri-menu-fold-line text-lg"></i>
                </button>
              </>
            ) : (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="w-full p-3 hover:bg-green-500 rounded-lg cursor-pointer text-green-200 hover:text-white transition-all"
              >
                <i className="ri-menu-unfold-line text-xl"></i>
              </button>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/admin/practitioner-dashboard" className="flex items-center p-4 bg-green-700 text-white rounded-xl cursor-pointer shadow-md border border-green-500">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-dashboard-3-line text-lg"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-semibold">Dashboard</span>}
          </Link>

          <Link href="/admin/practitioner-certificates" className="flex items-center p-4 text-green-100 hover:bg-green-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-file-text-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">My Certificates</span>}
          </Link>

          <Link href="/admin/practitioner-schedule" className="flex items-center p-4 text-green-100 hover:bg-green-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-calendar-check-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Schedule & Availability</span>}
          </Link>

          <Link href="/admin/practitioner-earnings" className="flex items-center p-4 text-green-100 hover:bg-green-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Earnings & Reports</span>}
          </Link>

          <Link href="/admin/practitioner-profile" className="flex items-center p-4 text-green-100 hover:bg-green-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-user-settings-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Profile & Settings</span>}
          </Link>

          {sidebarOpen && (
            <div className="pt-8 mt-8 border-t border-green-500">
              <div className="px-4 py-2 text-xs font-bold text-green-200 uppercase tracking-wider">
                Quick Actions
              </div>
              <button className="w-full flex items-center p-4 text-green-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all cursor-pointer group border border-transparent hover:border-blue-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className="ri-check-double-line text-lg group-hover:scale-110 transition-transform"></i>
                </div>
                <span className="ml-4 font-medium">Approve Certificate</span>
              </button>

              <button className="w-full flex items-center p-4 text-green-100 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer group border border-transparent hover:border-orange-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className="ri-time-line text-lg group-hover:scale-110 transition-transform"></i>
                </div>
                <span className="ml-4 font-medium">Set Unavailable</span>
              </button>
            </div>
          )}
        </nav>

        {sidebarOpen && (
          <div className="mt-auto p-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-white border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-user-heart-fill text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-bold">Dr. Sarah Johnson</div>
                  <div className="text-xs text-green-200">General Practitioner</div>
                </div>
              </div>
              <div className="text-xs text-green-200 mb-3">AHPRA: MED0001234567</div>
              <Link href="/" className="text-xs text-white hover:text-green-200 cursor-pointer flex items-center group">
                <i className="ri-home-line mr-1 group-hover:-translate-x-1 transition-transform"></i>
                Return to Main Site
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Practitioner Dashboard
                  </h1>
                  <p className="text-gray-600 mt-1">Welcome back, Dr. Sarah Johnson</p>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <i className="ri-shield-check-line mr-2"></i>
                    AHPRA Verified
                  </div>
                  <div suppressHydrationWarning={true} className="text-sm text-gray-500">
                    Last login: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl flex items-center justify-center cursor-pointer group transition-all">
                  <i className="ri-notification-3-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">12</span>
                  </div>
                </button>
                <div className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center cursor-pointer group transition-all">
                  <i className="ri-user-3-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Pending Reviews</p>
                  <p className="text-4xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                    {stats.pendingCertificates}
                  </p>
                </div>
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-time-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-orange-600 font-bold bg-orange-100 px-2 py-1 rounded-full">Urgent</span>
                <span className="text-gray-500 ml-2">requires attention</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Today's Approvals</p>
                  <p className="text-4xl font-bold text-green-600 group-hover:text-green-700 transition-colors">{stats.todayApprovals}</p>
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-check-double-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full">+3</span>
                <span className="text-gray-500 ml-2">since last hour</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Weekly Earnings</p>
                  <p className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">${stats.weeklyEarnings}</p>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-money-dollar-circle-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded-full">+15%</span>
                <span className="text-gray-500 ml-2">vs last week</span>
              </div>
            </div>
          </div>

          {/* Pending Certificates */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-10">
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Pending Certificate Reviews</h2>
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-refresh-line mr-2"></i>
                  Refresh Queue
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${request.priority === 'Urgent' ? 'bg-red-100' : 'bg-blue-100'}`}>
                        <i className={`text-lg ${request.priority === 'Urgent' ? 'ri-alarm-warning-fill text-red-600' : 'ri-file-text-line text-blue-600'}`}></i>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{request.patient}</p>
                        <p className="text-sm text-gray-600">{request.type} - {request.duration}</p>
                        <p className="text-xs text-gray-500">ID: {request.id} • Submitted {request.submitted}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${request.priority === 'Urgent' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                        {request.priority}
                      </span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                        <i className="ri-eye-line mr-2"></i>
                        Review
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                        <i className="ri-check-line mr-2"></i>
                        Quick Approve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Certificates Issued</span>
                  <span className="font-bold text-gray-900">{stats.totalCertificates}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Response Time</span>
                  <span className="font-bold text-green-600">{stats.responseTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Patient Rating</span>
                  <div className="flex items-center">
                    <span className="font-bold text-yellow-600 mr-2">{stats.averageRating}/5.0</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <i key={star} className={`ri-star-${star <= Math.floor(stats.averageRating) ? 'fill' : 'line'} text-yellow-400`}></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <i className="ri-check-double-line text-green-600 mr-3"></i>
                    <span className="font-medium text-green-800">Bulk Approve Certificates</span>
                  </div>
                  <i className="ri-arrow-right-s-line text-green-600"></i>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <i className="ri-calendar-check-line text-blue-600 mr-3"></i>
                    <span className="font-medium text-blue-800">Update Availability</span>
                  </div>
                  <i className="ri-arrow-right-s-line text-blue-600"></i>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <i className="ri-download-line text-orange-600 mr-3"></i>
                    <span className="font-medium text-orange-800">Export Reports</span>
                  </div>
                  <i className="ri-arrow-right-s-line text-orange-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
