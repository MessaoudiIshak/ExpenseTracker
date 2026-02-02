import React from 'react'

export default function DeleteAlert({ content, onDelete }) {
  return (
    <div className='w-full'>
        <p className="text-xs sm:text-sm">{content}</p>
        <div className='flex justify-end mt-4 sm:mt-6'>
          <button
            type='button'
            className='add-btn add-btn-fill text-xs sm:text-sm transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 animate-fade-in'
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
    </div>
  )
}
