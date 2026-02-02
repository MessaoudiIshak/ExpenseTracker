import React from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-screen h-screen overflow-y-auto bg-black/50 p-3 sm:p-4'>
        <div className='relative p-2 sm:p-3 w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg'>
            <div className='relative bg-white rounded-lg shadow-lg'>
                <div className='flex items-center justify-between p-3 sm:p-4 md:p-5 rounded-t border-b border-gray-200'>
                    <h3 className='text-sm sm:text-base md:text-lg font-medium text-gray-900 truncate pr-4'>{title}</h3>
                    <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full h-8 sm:h-9 w-8 sm:w-9 inline-flex justify-center items-center cursor-pointer flex-shrink-0 transition-colors duration-200' type='button' onClick={onClose}>
                        <svg
                        className='w-4 h-4 sm:w-5 sm:h-5'
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
                <div className='p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 max-h-[calc(90vh-100px)] sm:max-h-[calc(90vh-120px)] overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
