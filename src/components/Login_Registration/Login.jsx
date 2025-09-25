import React, { useRef, useState } from 'react'
import bg from './bglr.png'
import side from './Side.png'
import { Outlet, useNavigate, useLocation, Link } from 'react-router'
// Layout wrapper with illustration and outlet for nested routes
const Login = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="container mx-auto px-4 py-12 mt-15">
        <div
          className="relative rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Left illustration */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-transparent">
            <img src={side} alt="Side illustration" className="max-w-full h-auto p-8" />
          </div>

          {/* Right content renders child routes */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="max-w-md w-full p-10 rounded-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Login form (index route)
export const LoginForm = () => {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: real auth; redirecting to dashboard for now
    navigate('/dashboard')
  }
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#334E3A] mb-2">Welcome Back to Frework</h2>
      <p className="text-sm text-gray-600 mb-6">Sign in to your account</p>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="relative">
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              {/* mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v4z" />
              </svg>
            </span>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90"
              placeholder="user@mail.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              {/* lock icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 11V9a5 5 0 10-10 0v2" />
                <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90"
              placeholder="Password"
            />
          </div>
          <div className="text-right mt-2">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login/forgot') }} className="text-sm text-green-600 hover:underline">Forgot Password?</a>
          </div>
        </div>

        <div>
          <button type="submit" className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#73b04a] to-[#8BB353] shadow-md">
            Login
          </button>
        </div>

        <div className="text-center text-sm text-gray-700">
          <span>Don't have account? </span>
          <Link to="/register" className="inline-block ml-2 px-3 py-1 text-green-700 border border-green-200 rounded-md">Sign Up</Link>
        </div>
      </form>
    </>
  )
}

// Forgot email form
export const ForgotForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: call password-reset API then navigate
    navigate('/login/code', { state: { email } })
  }
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold text[#334E3A] mb-2">Confirm Email</h2>
      <p className="text-sm text-gray-600 mb-6">Enter your email address which is used for the registration</p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              {/* mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v4z" />
              </svg>
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded pl-10 pr-3 py-2 bg-white/90"
              placeholder="user@mail.com"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 w-full  rounded-md text-white font-medium bg-[#8BB353] hover:bg-[#73b04a] transition-colors shadow"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  )
}

// Code verification form
export const CodeForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const [code, setCode] = useState(['', '', '', ''])
  const codeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const handleCodeChange = (idx, value) => {
    const v = value.replace(/\D/g, '').slice(0, 1)
    const next = [...code]
    next[idx] = v
    setCode(next)
    if (v && idx < codeRefs.length - 1) {
      codeRefs[idx + 1].current?.focus()
    }
  }
  const handleCodeKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !code[idx] && idx > 0) codeRefs[idx - 1].current?.focus()
    if (e.key === 'ArrowLeft' && idx > 0) codeRefs[idx - 1].current?.focus()
    if (e.key === 'ArrowRight' && idx < codeRefs.length - 1) codeRefs[idx + 1].current?.focus()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const token = code.join('')
    if (token.length === 4) {
      // TODO: verify code
      // After successful verification, navigate to the reset password page
      navigate('/login/reset', { state: { email } })
    }
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl leading-tight whitespace-nowrap font-semibold text-[#334E3A] mb-2 -ml-18">We have sent you an activation code.</h2>
        <p className="text-sm text-gray-600 mb-6">An email has been sent to your email address containing a code to reset your password.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-center">
        <div className="text-center">
          <label className="block text-sm text-gray-700 mb-2 text-center">Enter verification code</label>
          <div className="flex gap-4 justify-center mx-auto">
            {code.map((c, i) => (
              <input
                key={i}
                ref={codeRefs[i]}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="w-12 h-12 text-center rounded border border-gray-300 text-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
                value={c}
                onChange={(e) => handleCodeChange(i, e.target.value)}
                onKeyDown={(e) => handleCodeKeyDown(i, e)}
              />
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3 text-center">
            If you didn't receive a code?{' '}
            <button type="button" onClick={() => {/* TODO: resend */}} className="text-green-700 underline">click here</button>.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-md text-white font-medium bg-[#8BB353] hover:bg-[#73b04a] transition-colors shadow mx-auto"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  )
}

// Sent confirmation
export const SentInfo = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email
  return (
    <div className="text-center">
      <h3 className="text-xl font-medium mb-2">Check your inbox</h3>
      <p className="text-sm text-gray-600 mb-6">If an account with <strong>{email || 'that email'}</strong> exists, we've sent a password reset link.</p>
      <div className="flex justify-center">
        <button onClick={() => navigate('/login')} className="py-2 px-4 rounded bg-green-600 text-white">Back to login</button>
      </div>
    </div>
  )
}

export default Login
