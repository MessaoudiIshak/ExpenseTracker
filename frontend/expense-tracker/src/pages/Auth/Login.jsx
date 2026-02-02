import { useState } from 'react';
import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import { useNavigate } from 'react-router-dom';
import { API_PATHS } from '../../utils/apiPaths.js';
import axiosInstance from '../../utils/axiosInstance.js';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';

export default function Login() {
const  [email, setEmail] = useState('');
const  [password, setPassword] = useState('');
const [error, setError] = useState(null);
const { updateUser } = useContext(UserContext);

const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) { setError('Please enter a valid email address'); return; }
    if(password.length < 8) { setError('Password must be at least 8 characters long'); return; }
    setError(null);
   try {
    const respone = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password
    });
    const {token, user} = respone.data;
    if (token) {
      localStorage.setItem('token', token);
      updateUser(user);
      navigate('/');
    }
    } catch (err) {
      if(err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
}
  
  return (
    <AuthLayout>
        <div className='w-full md:w-[90%] lg:w-[70%] h-auto md:h-3/4 flex flex-col justify-center px-4 sm:px-0'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-black'>Welcome Back!</h3>
            <p className='text-xs sm:text-sm text-slate-700 mt-2 sm:mt-[5px] mb-4 sm:mb-6'>Please login to your account</p>
            <form onSubmit={handleLogin} className='w-full'>
                <Input
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder='john@example.com'
                 />
                  <Input
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder='Min 8 characters'
                 />
                  {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                  <button type='submit' className='btn-primary '>
                  Login</button>
                  <p className='text-xs sm:text-[13px] text-slate-800 mt-3'>
                    Don't have an account? <Link to="/signup" className='font-medium text-primary underline'>Sign Up</Link>
                  </p>
            </form>
        </div>

    </AuthLayout>
  )
}
