import React from 'react'
import CARD_2 from '../../assets/card2.png'
import { LuTrendingUpDown } from 'react-icons/lu'
export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row">
            <div className="w-full md:w-[60vw] h-auto md:h-screen px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:pt-8 md:pb-12 flex flex-col justify-center bg-gradient-to-br from-white via-violet-50 to-purple-100 relative overflow-hidden">
                {/* Animated floating coins and bills */}
                <MoneyBackgroundSVG />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black z-10 relative mb-4 md:mb-0">Expense Tracker</h2>
                <div className="z-10 relative min-h-[60vh] md:min-h-auto flex flex-col justify-center">{children}</div>
            </div>
            <div className="hidden md:block w-full md:w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center p-4 sm:p-6 md:p-8 overflow-hidden relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 animate-float-slow"></div>
                <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10 animate-float-medium"></div>
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 animate-float-fast"></div>
                {/* Animated floating coins and bills on right */}
                <MoneyBackgroundSVG right />
                <div className="grid grid-cols-1 relative z-30">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="430,000"
                        color="bg-primary"
                    />
                </div>
                <img src={CARD_2} className="w-40 sm:w-48 md:w-60 lg:w-72 absolute bottom-10 left-6 shadow-lg shadow-blue-400/15 z-20 animate-fade-in" />
            </div>
        </div>
    );
}

// Animated SVG background for money theme (no yellow coin)
function MoneyBackgroundSVG({ right }) {
    return (
        <svg
            className={`pointer-events-none select-none absolute z-0 ${right ? 'right-0 top-0 h-full w-1/2' : 'left-0 top-0 h-full w-full'} opacity-60`}
            width="100%"
            height="100%"
            viewBox="0 0 600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Floating bill */}
            <g className="animate-bill-float" style={{ transformOrigin: '200px 200px' }}>
                <rect x="180" y="200" width="80" height="40" rx="10" fill="#4ADE80" stroke="#22C55E" strokeWidth="4" />
                <text x="220" y="228" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff">💵</text>
            </g>
            {/* More bills for effect */}
            <g className="animate-bill-float-slow" style={{ transformOrigin: '500px 300px' }}>
                <rect x="480" y="300" width="60" height="28" rx="7" fill="#A5B4FC" stroke="#6366F1" strokeWidth="3" />
                <text x="510" y="320" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">💸</text>
            </g>
        </svg>
    );
}

const StatsInfoCard = ({ icon, label, value, color }) => {
    return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50'>
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div> 
            <div>
                <h6 className='text-xs text-gray-500 mb-1 '>
                    {label}
                </h6>
                <span className='text-[20px]'>${value}</span>
            </div>
        </div>
    


}