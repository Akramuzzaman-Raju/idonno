import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../navbar/navbar1';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const formValidation = () => {
    const errormsg = {};

    if (!email.trim()) {
      errormsg.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errormsg.email = 'Invalid email format';
    }

    if (!password.trim()) {
      errormsg.password = 'Password is required';
    }

    setErrors(errormsg);
    return Object.keys(errormsg).length === 0;
  };

  useEffect(() => {
  if(localStorage.getItem('userId')){
    window.location.href = '/user/home';
  }
  })
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (formValidation()) {
    try {
      const response = await axios.post('http://localhost:3001/auth/signin', { email, password });
      console.log('Login response:' ,response?.data);
      if (response.status === 201) {
        console.log('userid:', response.data)
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('userName', response.data.name)
        window.location.href = '/user/home';
      } else {
        setLoginError('Login failed. Please check your email and password.');

        // console.log('Error');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred while attempting to log in.');

    }
  }
  };

  return (
    <div>
      <Navbar1/>
      
<section className="bg-gray-50 dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Study Abroad Consultation Center</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Unlocking Global Opportunities: Your Journey to Study Abroad Begins Here".</p>
        </div>
        <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
                <form className="mt-8 space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"  className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder='Enter your email address' value={email} onChange={e => setEmail(e.target.value)}/>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin} >Login to your account</button>
                    {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}

                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Not registered yet? <a href="./registration"  className="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
  );
}

