import React, { useState, useRef } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

export default function ProfilePhotoSelector({ image, setImage }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    const inputRef = useRef();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            //
            setImage(file);
            // Generate a preview URL
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };
    const handleImageRemove = () => {
        setImage(null);
        setPreviewUrl(null);
    };
    const onChooseFile = () => {
        inputRef.current.click();
    };

  return (
    <div className='flex justify-center mb-6'>
        <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
        />
        {!image ? (
            <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative group hover:bg-purple-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
                <LuUser className='text-4xl text-primary transition-transform duration-300 group-hover:scale-110' />
                <button type='button' 
                onClick={onChooseFile}
                className='w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-110 hover:shadow-md hover:rotate-12 active:scale-95'>
                    <LuUpload className='transition-transform duration-200' />
                </button>
            </div>
        ):(
            <div className='relative group'>
                <img src={previewUrl} alt="Profile Preview" 
                className='w-20 h-20 rounded-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:brightness-105' />
                <button type='button'
                onClick={handleImageRemove}
                 className='h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-110 hover:shadow-md hover:-rotate-12 active:scale-95'>
                    <LuTrash className='transition-transform duration-200 hover:animate-pulse'/>
                 </button>
                 
            </div>

        )
    }
    </div>
  )
}
