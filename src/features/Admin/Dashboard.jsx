'use client';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AdminDashboard() {
  const [stats] = useState({
    totalCertificates: 1247,
    pendingApprovals: 23,
    activePractitioners: 156,
    totalRevenue: 78940,
    todayApplications: 45,
    approvalRate: 94.2
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Clean Sidebar */}
      <div className={`bg-indigo-600 shadow-xl transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-20'} flex-shrink-0`}>
        <div className="p-6 border-b border-indigo-500">
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
                    <div className="text-xs text-indigo-200">Admin Console</div>
                  </div>
                </Link>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-indigo-500 rounded-lg cursor-pointer text-indigo-200 hover:text-white transition-all"
                >
                  <i className="ri-menu-fold-line text-lg"></i>
                </button>
              </>
            ) : (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="w-full p-3 hover:bg-indigo-500 rounded-lg cursor-pointer text-indigo-200 hover:text-white transition-all"
              >
                <i className="ri-menu-unfold-line text-xl"></i>
              </button>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center p-4 bg-indigo-700 text-white rounded-xl cursor-pointer shadow-md border border-indigo-500">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-dashboard-3-line text-lg"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-semibold">Dashboard Overview</span>}
          </Link>

          <Link href="/admin/users" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-team-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">User Management</span>}
          </Link>

          <Link href="/admin/certificates" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-shield-check-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Certificate Logs</span>}
          </Link>

          <Link href="/admin/payments" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-wallet-3-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Payment Hub</span>}
          </Link>

          <Link href="/admin/discounts" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-coupon-3-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Discount Engine</span>}
          </Link>

          <Link href="/admin/reports" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-line-chart-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">Analytics Center</span>}
          </Link>

          <Link href="/admin/settings" className="flex items-center p-4 text-indigo-100 hover:bg-indigo-500 hover:text-white rounded-xl transition-all cursor-pointer group">
            <div className="w-7 h-7 flex items-center justify-center">
              <i className="ri-settings-4-line text-lg group-hover:scale-110 transition-transform"></i>
            </div>
            {sidebarOpen && <span className="ml-4 font-medium">System Settings</span>}
          </Link>

          {sidebarOpen && (
            <div className="pt-8 mt-8 border-t border-indigo-500">
              <div className="px-4 py-2 text-xs font-bold text-indigo-200 uppercase tracking-wider">
                Quick Actions
              </div>
              
              <button className="w-full flex items-center p-4 text-indigo-100 hover:bg-emerald-600 hover:text-white rounded-xl transition-all cursor-pointer group border border-transparent hover:border-emerald-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className="ri-user-add-line text-lg group-hover:scale-110 transition-transform"></i>
                </div>
                <span className="ml-4 font-medium">Add Practitioner</span>
                <i className="ri-arrow-right-s-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>

              <button className="w-full flex items-center p-4 text-indigo-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all cursor-pointer group border border-transparent hover:border-blue-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className="ri-download-cloud-2-line text-lg group-hover:scale-110 transition-transform"></i>
                </div>
                <span className="ml-4 font-medium">Export Reports</span>
                <i className="ri-arrow-right-s-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>

              <button className="w-full flex items-center p-4 text-indigo-100 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer group border border-transparent hover:border-orange-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className="ri-notification-2-line text-lg group-hover:scale-110 transition-transform"></i>
                </div>
                <span className="ml-4 font-medium">Send Alert</span>
                <i className="ri-arrow-right-s-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>
            </div>
          )}
        </nav>

        {sidebarOpen && (
          <div className="mt-auto p-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-white border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-admin-fill text-indigo-600 text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-bold">Super Admin</div>
                  <div className="text-xs text-indigo-200">System Administrator</div>
                </div>
              </div>
              <div className="text-xs text-indigo-200 mb-3">Last login: Today 2:30 PM</div>
              <Link href="/" className="text-xs text-white hover:text-indigo-200 cursor-pointer flex items-center group">
                <i className="ri-home-line mr-1 group-hover:-translate-x-1 transition-transform"></i>
                Return to Main Site
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Clean Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    System Dashboard
                  </h1>
                  <p className="text-gray-600 mt-1">Welcome back, Administrator</p>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <i className="ri-pulse-line mr-2"></i>
                    All Systems Online
                  </div>
                  <div suppressHydrationWarning={true} className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="relative w-12 h-12 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center cursor-pointer group transition-all">
                  <i className="ri-notification-3-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">3</span>
                  </div>
                </button>
                
                <div className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center cursor-pointer group transition-all">
                  <i className="ri-user-3-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Certificates</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stats.totalCertificates.toLocaleString()}
                  </p>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-file-text-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full">+12%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Pending Review</p>
                  <p className="text-4xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">{stats.pendingApprovals}</p>
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
                  <p className="text-sm text-gray-600 font-medium">Active Practitioners</p>
                  <p className="text-4xl font-bold text-green-600 group-hover:text-green-700 transition-colors">{stats.activePractitioners}</p>
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-user-heart-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full">+8</span>
                <span className="text-gray-500 ml-2">new this week</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Monthly Revenue</p>
                  <p className="text-4xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-money-dollar-circle-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full">+18%</span>
                <span className="text-gray-500 ml-2">growth rate</span>
              </div>
            </div>
          </div>

          {/* Management Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
            <Link href="/admin/users" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-team-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">User Management</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive user account management for patients, practitioners, and administrators</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-full">156 Active Users</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>

            <Link href="/admin/certificates" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-shield-check-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Certificate Audit</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Complete audit trail with advanced search, verification, and compliance monitoring</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">1,247 Records</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>

            <Link href="/admin/payments" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-wallet-3-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Payment Hub</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Stripe integration, transaction monitoring, and automated revenue reporting</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-600 font-bold bg-indigo-100 px-3 py-1 rounded-full">$78,940 Revenue</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>

            <Link href="/admin/discounts" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-coupon-3-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Discount Engine</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Smart discount rules for students, frontline workers, and bulk purchases</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-orange-600 font-bold bg-orange-100 px-3 py-1 rounded-full">12 Active Rules</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>

            <Link href="/admin/reports" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-line-chart-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Analytics Center</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Advanced reporting with real-time insights and exportable dashboards</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-600 font-bold bg-indigo-100 px-3 py-1 rounded-full">94.2% Success Rate</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>

            <Link href="/admin/settings" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <i className="ri-settings-4-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">System Control</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Platform configuration, security settings, and compliance management</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-bold bg-gray-100 px-3 py-1 rounded-full">All Systems Ready</span>
                <i className="ri-arrow-right-circle-line text-2xl text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </Link>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Recent System Activity</h2>
                <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-refresh-line mr-2"></i>
                  Refresh
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <i className="ri-check-double-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">Certificate #MC-2024-0156 approved</p>
                      <p className="text-sm text-gray-600">Dr. Sarah Johnson approved patient medical certificate request</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600 font-medium bg-white px-3 py-1 rounded-full">2 min ago</span>
                </div>

                <div className="flex items-center justify-between p-6 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <i className="ri-user-star-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">New practitioner verified</p>
                      <p className="text-sm text-gray-600">Dr. Michael Chen completed AHPRA verification process</p>
                    </div>
                  </div>
                  <span className="text-sm text-blue-600 font-medium bg-white px-3 py-1 rounded-full">15 min ago</span>
                </div>

                <div className="flex items-center justify-between p-6 bg-indigo-50 border border-indigo-200 rounded-xl hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <i className="ri-secure-payment-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">Payment processed: $79.00</p>
                      <p className="text-sm text-gray-600">Patient ID: P-2024-0892 | Certificate fee + charity donation</p>
                    </div>
                  </div>
                  <span className="text-sm text-indigo-600 font-medium bg-white px-3 py-1 rounded-full">1 hour ago</span>
                </div>

                <div className="flex items-center justify-between p-6 bg-orange-50 border border-orange-200 rounded-xl hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <i className="ri-tools-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">System maintenance scheduled</p>
                      <p className="text-sm text-gray-600">Automated backup and security updates planned for tonight</p>
                    </div>
                  </div>
                  <span className="text-sm text-orange-600 font-medium bg-white px-3 py-1 rounded-full">3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}