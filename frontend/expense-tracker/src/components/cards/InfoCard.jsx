import React from 'react'

export default function InfoCard({ label, icon, color, value }) {
  return (
    <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50 transition-transform duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
      <div className={`h-14 w-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl transition-transform duration-500 group-hover:rotate-12`}>
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-400 mb-1 font-semibold tracking-wide">{label}</h6>
        <span className="text-[22px] font-bold text-gray-900">${value}</span>
      </div>
    </div>
  )
}
