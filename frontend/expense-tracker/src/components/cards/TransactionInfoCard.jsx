import React from 'react'
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2
} from "react-icons/lu";
export default function TransactionInfoCard({ title, icon, date, amount, type, hideDeleteBtn, onDelete }) {
    const getAmountStyles = () => { return type === 'income' ? "bg-green-50 text-green-500" :"bg-red-50 text-red-500"
    };
        return (
            <div className="group relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 rounded-lg hover:bg-gray-100/60 p-2 sm:p-3 transition-transform duration-300 hover:scale-[1.02] active:scale-100 animate-fade-in shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-lg sm:text-xl text-gray-800 bg-gray-100 rounded-full transition-transform duration-500 group-hover:rotate-6 flex-shrink-0">
                        {icon ? (
                            <img src={icon} alt={title} className="w-5 sm:w-6 h-5 sm:h-6" />
                        ) : (
                            <LuUtensils />
                        )}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-700 font-semibold group-hover:text-purple-700 transition-colors duration-200 truncate">{title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-auto flex-shrink-0">
                    <div className={`flex items-center gap-1 px-2 py-1 sm:py-1.5 rounded-md ${getAmountStyles()} font-semibold shadow-sm transition-all duration-200 group-hover:shadow-md whitespace-nowrap`}>
                        <h6 className="text-xs sm:text-xs font-bold">
                            {type === 'income' ? '+' : '-'}${amount}
                        </h6>
                        {type === 'income' ? <LuTrendingUp size={14} /> : <LuTrendingDown size={14} />}
                    </div>
                    {!hideDeleteBtn && (
                        <button
                            className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer ml-1 p-1 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300 flex-shrink-0"
                            onClick={onDelete}
                            aria-label="Delete"
                        >
                            <LuTrash2 size={16} />
                        </button>
                    )}
                </div>
            </div>
        )
}
