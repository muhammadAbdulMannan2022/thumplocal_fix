import React from 'react'
import bg from './bglr.png'
import side from './Side.png'

const Register = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="container mx-auto px-4 py-12 mt-15">
        <div
          className="relative rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Left illustration */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img src={side} alt="Side illustration" className="max-w-full h-auto p-8" />
          </div>

          {/* Right form */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="max-w-md w-full p-10 rounded-md">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#334E3A] mb-2">Welcome to Frework</h2>
              <p className="text-sm text-gray-600 mb-6">Create your account</p>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v4z" />
                      </svg>
                    </span>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90" placeholder="user@mail.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 11V9a5 5 0 10-10 0v2" />
                        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                    <input type="password" className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90" placeholder="Password" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 11V9a5 5 0 10-10 0v2" />
                        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                    <input type="password" className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90" placeholder="Confirm Password" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#73b04a] to-[#8BB353] shadow-md">Register</button>
                </div>

                <div className="text-center text-sm text-gray-700">
                  <span>Already have an account? </span>
                  <a href="/login" className="inline-block ml-2 px-3 py-1 text-green-700 border border-green-200 rounded-md">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
 