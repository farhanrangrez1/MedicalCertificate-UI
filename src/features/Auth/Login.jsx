'use client';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState("");
  const [dashboardType, setDashboardType] = useState("admin");
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const navigate = useNavigate(); // ✅ React Router navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // First Step: Verify credentials
    if (!showTwoFactor) {
      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("dashboard_type", dashboardType);
        formData.append("login_step", "credentials");

        const response = await fetch(
          "https://readdy.ai/api/form/d2hguvq9iie44a8gs4d0",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
          }
        );

        if (response.ok) {
          setSubmitStatus("Credentials verified successfully ✅");
          setShowTwoFactor(true);
        } else {
          setSubmitStatus("Invalid credentials. Please try again ❌");
        }
      } catch (error) {
        setSubmitStatus("Network error. Please check your connection ⚠️");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Second Step: Verify 2FA
      if (twoFactor.length !== 6) {
        setSubmitStatus("Please enter a valid 6-digit code");
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("dashboard_type", dashboardType);
        formData.append("two_factor_code", twoFactor);
        formData.append("login_step", "complete");
        formData.append("login_time", new Date().toISOString());

        const response = await fetch(
          "https://readdy.ai/api/form/d2hguvq9iie44a8gs4d0",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
          }
        );

        if (response.ok) {
          setSubmitStatus("Authentication successful! Redirecting...");
          setTimeout(() => {
            if (dashboardType === "admin") {
              navigate("/admin/dashboard"); // ✅ fixed
            } else {
              navigate("/admin/practitioner-dashboard"); // ✅ fixed
            }
          }, 1500);
        } else {
          setSubmitStatus("Invalid 2FA code. Please try again ❌");
        }
      } catch (error) {
        setSubmitStatus("Network error. Please check your connection ⚠️");
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/d02d88b0d280feb932d3d4db548036a1/e03fc4111da8fa0a9a095e83112fcc2c.jfif"
                alt="Medical Certificate Platform"
                className="h-12 w-auto mr-3"
                style={{ width: '250px', height: 'auto' }}
              />
            </Link>
            <nav className="flex space-x-8">
              <Link to={"/"} className="text-indigo-100 hover:text-white transition-colors cursor-pointer">
                Home
              </Link>
              <Link to={"/PatientPortal"} className="text-indigo-100 hover:text-white transition-colors cursor-pointer">
                Patient Portal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center py-12 bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-admin-line text-3xl text-white"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Console</h1>
              <p className="text-gray-600">Secure access to system administration</p>
            </div>

            <form 
              id="admin-login-form" 
              onSubmit={handleLogin} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="dashboardType" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Dashboard
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDashboardType('admin')}
                    disabled={showTwoFactor || isSubmitting}
                    className={`p-4 border-2 rounded-lg text-center transition-all cursor-pointer ${
                      dashboardType === 'admin'
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    } disabled:opacity-50`}
                  >
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <i className="ri-admin-fill text-xl"></i>
                    </div>
                    <div className="text-sm font-semibold">Owner/Admin</div>
                    <div className="text-xs text-gray-500">Full System Access</div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setDashboardType('practitioner')}
                    disabled={showTwoFactor || isSubmitting}
                    className={`p-4 border-2 rounded-lg text-center transition-all cursor-pointer ${
                      dashboardType === 'practitioner'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    } disabled:opacity-50`}
                  >
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <i className="ri-user-heart-fill text-xl"></i>
                    </div>
                    <div className="text-sm font-semibold">Practitioner</div>
                    <div className="text-xs text-gray-500">Certificate Management</div>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {dashboardType === 'admin' ? 'Administrator Email' : 'Practitioner Email'}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 text-sm"
                  placeholder={dashboardType === 'admin' ? 'admin@medicert.com.au' : 'doctor@medicert.com.au'}
                  required
                  disabled={showTwoFactor || isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 text-sm"
                  placeholder="Enter secure password"
                  required
                  disabled={showTwoFactor || isSubmitting}
                />
              </div>

              {showTwoFactor && (
                <div>
                  <label htmlFor="twoFactor" className="block text-sm font-medium text-gray-700 mb-2">
                    Two-Factor Authentication Code
                  </label>
                  <input
                    id="twoFactor"
                    name="two_factor_code"
                    type="text"
                    value={twoFactor}
                    onChange={(e) => setTwoFactor(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 text-sm text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    required
                    autoFocus
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Enter the 6-digit code from your authenticator app
                  </p>
                </div>
              )}

              {/* Status Message */}
              {submitStatus && (
                <div className={`p-3 rounded-lg text-sm text-center ${submitStatus.includes('success') || submitStatus.includes('verified') ? 'bg-green-50 text-green-700 border border-green-200' : submitStatus.includes('error') || submitStatus.includes('Invalid') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || (showTwoFactor && twoFactor.length !== 6)}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  showTwoFactor ? `Access ${dashboardType === 'admin' ? 'Admin Console' : 'Practitioner Dashboard'}` : 'Continue to 2FA'
                )}
              </button>
            </form>

            {showTwoFactor && !isSubmitting && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setShowTwoFactor(false);
                    setTwoFactor('');
                    setSubmitStatus('');
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  ← Back to credentials
                </button>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-shield-line text-red-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Restricted Access:</strong> This portal is for authorized system administrators and practitioners only. 
                      All access is logged and monitored for security compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Features */}
          <div className="mt-8">
            {dashboardType === 'admin' ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-dashboard-line text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">System Dashboard</h3>
                  <p className="text-xs text-gray-600">Monitor platform metrics and health</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-user-settings-line text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">User Management</h3>
                  <p className="text-xs text-gray-600">Manage practitioners and patients</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-file-shield-line text-indigo-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Certificate Logs</h3>
                  <p className="text-xs text-gray-600">Audit trail and verification</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-settings-3-line text-orange-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">System Config</h3>
                  <p className="text-xs text-gray-600">Payment, email & compliance settings</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-file-text-line text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">My Certificates</h3>
                  <p className="text-xs text-gray-600">Review and approve requests</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-calendar-check-line text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Schedule</h3>
                  <p className="text-xs text-gray-600">Manage availability and appointments</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-bar-chart-line text-indigo-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Performance</h3>
                  <p className="text-xs text-gray-600">Track earnings and statistics</p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-user-line text-purple-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Profile</h3>
                  <p className="text-xs text-gray-600">Update credentials and settings</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}