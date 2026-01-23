import React from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-black/50'>
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
            <div className='relative bg-white rounded-lg shadow-sm'>
                <div className='flex items-center justify-between p-4 md:p-5 rounded-t border-gray-200'>
                    <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
                    <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full h-10 w-10 inline-flex justify-center items-center cursor-pointer' type='button' onClick={onClose}>
                        <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 14'
                        >
                        <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 1l12 12M13 1L1 13'
                        />
                        </svg>
                    </button>
                 </div>
                <div className='p-4 md:p-5 space-y-4 '>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
