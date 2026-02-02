import React from 'react'
import {useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'
export default function Input({value, onChange, type , placeholder, label}) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div className='w-full'>
        <label className='text-xs sm:text-[13px] text-slate-800 block'>{label}</label>
        <div className='input-box'>
            <input type={type === 'password' ? (showPassword ? 'text' : 'password') : type} 
            value={value} 
            className='w-full bg-transparent outline-none text-xs sm:text-sm'
            onChange={(e) => onChange(e)}
             placeholder={placeholder} />

            {type === 'password' && (
                <>
                {showPassword ? (
                    <FaRegEye
                    size={18}
                    className='text-primary cursor-pointer flex-shrink-0'
                    onClick={()=> togglePasswordVisibility()}
                     />
                ) : (
                    <FaRegEyeSlash
                    size={18}
                    className='text-slate-400 cursor-pointer flex-shrink-0'
                    onClick={()=> togglePasswordVisibility()}
                    />
                )}
                
                
                
                </>
            )
            
            
            
            
            }
        </div>
    </div>
  )
}
