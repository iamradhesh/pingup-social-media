import React, { useState } from 'react'

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Error handling and form submission logic goes here
    if(!formData.email || !formData.password){
      setError("Please fill all the fields");
      return;
    }
    else if(formData.password.length < 6){
      setError("Password must be at least 6 characters long");
      return;
    }
    console.log("Form Data Submitted: ", formData);
    //  API call
  }

  return (
    // Main Container: w-full and max-width classes are correct for a card/form wrapper.
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg justify-center items-center p-6 md:p-10 '>
      
      {/* 1. Heading */}
      <h2 className='text-center font-outfit text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black'>
        Sign In to
      </h2>
      
      {/* 2. Descriptive Text (REMOVED absolute positioning and fixed px sizes) */}
      {/* Replaced fixed width/height/top/left with flex and spacing classes */}
      <div className='flex items-center justify-center mb-6'>
        <p className='font-outfit text-[#212126A6] text-[13px] font-normal leading-[18px] tracking-normal text-center align-middle'>
          Welcome back! Please sign in to continue
        </p>
      </div>
      
      {/* 3. Form Container (REMOVED absolute positioning and fixed px sizes) */}
      {/* Replaced absolute positioning and fixed sizes (h-[118px] top-[109.98px] etc.) with responsive flow */}
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'> {/* Use flex-col and space-y for vertical flow and consistent spacing */}
        
        {/* Email Input Group */}
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
        
        {/* Password Input Group */}
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
        </div>
        
        {/* Add a submission button here for a complete form */}
        <button 
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-outfit font-medium rounded-lg hover:bg-blue-700 transition duration-150"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn