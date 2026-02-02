import React from 'react'

export default function InfoCard({ label, icon, color, value }) {
  return (
    <div className="flex gap-3 sm:gap-6 bg-white p-4 sm:p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50 transition-transform duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
      <div className={`h-12 sm:h-14 w-12 sm:w-14 flex items-center justify-center text-xl sm:text-[26px] text-white ${color} rounded-full drop-shadow-xl transition-transform duration-500 group-hover:rotate-12 flex-shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h6 className="text-xs sm:text-sm text-gray-400 mb-1 font-semibold tracking-wide">{label}</h6>
        <span className="text-lg sm:text-[22px] font-bold text-gray-900 break-words">${value}</span>
      </div>
    </div>
  )
}
