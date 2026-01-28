import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const[formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const[loading, setLoading] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
   const {name, value} = event.target;

   setFormData((prev) => ({...prev, [name]: value}));
   setErrorMessage('');
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Login to your account
      </h2>
  
      {/* Email */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
  
      {/* Password */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <Link
            to=""
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
  
      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Sign In
      </button>
  
      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
  
    </form>
  </div>
  )
}

export default Login