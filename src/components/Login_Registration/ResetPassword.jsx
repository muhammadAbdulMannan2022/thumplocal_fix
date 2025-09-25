import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'

const ResetPassword = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!password) return
    if (password !== confirm) return
    // TODO: call API to set new password
    // after success, navigate to a success page which will redirect to login
    navigate('/login/reset-success', { state: { email } })
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium mb-6">Change Password</h2>
      <form onSubmit={onSubmit} className="space-y-4 max-w-sm mx-auto">
        <div>
          <label className="block text-sm text-gray-700 mb-2">New password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="mt-1 block w-full border border-gray-300 rounded pl-3 pr-3 py-2 bg-white/90" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">Confirm new password</label>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Enter Password" className="mt-1 block w-full border border-gray-300 rounded pl-3 pr-3 py-2 bg-white/90" />
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="px-8 py-3 rounded bg-[#8BB353] text-white">Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
