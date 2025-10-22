import React, { useState } from 'react';
import { signupService } from '../service/authServices';
import { useNavigate } from 'react-router-dom'; // <-- import this

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate(); // <-- initialize

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.password){
      setError("Please fill all the fields");
      return;
    }
    else if(formData.password.length < 6){
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await signupService(formData);
      setSuccess(result.message);
      setError(null);

      // Redirect to /signin after 1 second
      setTimeout(() => {
        navigate('/signin');
      }, 1000);

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  }

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg justify-center items-center p-6 md:p-10 '>
      <h2 className='text-center font-outfit text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black'>
        Sign Up for
      </h2>

      <div className='flex items-center justify-center mb-6'>
        <p className='font-outfit text-[#212126A6] text-[13px] font-normal leading-[18px] tracking-normal text-center align-middle'>
          Welcome! Please sign up to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        {/* Name Input */}
        <div className='flex flex-col w-full'>
          <label htmlFor="name" className='font-outfit text-sm font-medium leading-normal text-black mb-1'>Name</label>
          <input 
            type="text" 
            id='name' 
            name='name' 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder='Enter your name' 
            className='w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Email Input */}
        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='font-outfit text-sm font-medium leading-normal text-black mb-1'>Email</label>
          <input 
            type="email" 
            id='email' 
            name='email' 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder='Enter your email' 
            className='w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Password Input */}
        <div className='flex flex-col w-full'>
          <label htmlFor="password" className='font-outfit text-sm font-medium leading-normal text-black mb-1'>Password</label>
          <input 
            type="password" 
            id='password' 
            name='password' 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder='Enter your password' 
            className='w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          {success && <p className='text-green-500 text-sm'>{success}</p>}
        </div>

        <button 
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-outfit font-medium rounded-lg hover:bg-blue-700 transition duration-150"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup;
