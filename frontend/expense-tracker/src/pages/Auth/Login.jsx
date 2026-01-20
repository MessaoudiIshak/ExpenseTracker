import { useState } from 'react';
import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import { useNavigate } from 'react-router-dom';


export default function Login() {
const  [email, setEmail] = useState('');
const  [password, setPassword] = useState('');
const [error, setError] = useState(null);

const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) { setError('Please enter a valid email address'); return; }
    if(password.length < 8) { setError('Password must be at least 8 characters long'); return; }
    setError(null);
    // Proceed with login logic (e.g., API call)
}
  
  return (
    <AuthLayout>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center '>
            <h3 className='text-xl font-semibold text-black'>Welcome Back!</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please login to your account</p>
            <form onSubmit={handleLogin}>
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
                  <p className='text-[13px] text-slate-800 mt-3'>
                    Don't have an account? <Link to="/signup" className='font-medium text-primary underline'>Sign Up</Link>
                  </p>
            </form>
        </div>

    </AuthLayout>
  )
}
