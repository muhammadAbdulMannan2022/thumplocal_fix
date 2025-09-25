import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'

const ResetSuccess = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email

  useEffect(() => {
    const t = setTimeout(() => navigate('/login'), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="text-center">
      <div className="max-w-xs mx-auto bg-transparent p-6">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 mx-auto flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2">Password changed successfully</h3>
        <div className="mb-4 text-sm text-gray-600">You will be redirected to login shortly.</div>
        <div className="flex justify-center">
          <button onClick={() => navigate('/login')} className="px-4 py-2 rounded bg-[#8BB353] text-white">← Back To login</button>
        </div>
      </div>
    </div>
  )
}

export default ResetSuccess
