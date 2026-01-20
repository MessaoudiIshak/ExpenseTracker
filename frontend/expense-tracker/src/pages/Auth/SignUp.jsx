import { useState } from 'react';
import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = '';
    if (!fullName){
      setError('Full name is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    // api call to upload profile picture if exists
  };
  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center '>
        <h3 className='text-xl  font-semibold  text-black '>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>
        <form onSubmit={handleSignUp} >
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              type='text'
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Enter your full name"
            />
           <Input
              type='text'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder='john@example.com'
              />
            <div className='col-span-2'>
            <Input
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder='Min 8 characters'
              />
              </div>
            </div>
              {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <button type='submit' className='btn-primary '>
                Sign up</button>
                <p className='text-[13px] text-slate-800 mt-3'>
                  Have an account already? <Link to="/login" className='font-medium text-primary underline'>Log In</Link>
                </p>
        </form>
      </div>
    </AuthLayout>
  )
}
