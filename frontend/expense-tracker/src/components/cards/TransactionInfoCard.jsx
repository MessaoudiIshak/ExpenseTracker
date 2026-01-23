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
            <div className="group relative flex items-center gap-4 mt-2 rounded-lg hover:bg-gray-100/60 p-3 transition-transform duration-300 hover:scale-[1.02] active:scale-100 animate-fade-in shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full transition-transform duration-500 group-hover:rotate-6">
                    {icon ? (
                        <img src={icon} alt={title} className="w-6 h-6" />
                    ) : (
                        <LuUtensils />
                    )}
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-700 font-semibold group-hover:text-purple-700 transition-colors duration-200">{title}</p>
                        <p className="text-xs text-gray-400 mt-1">{date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${getAmountStyles()} min-w-[80px] justify-end font-semibold shadow-sm transition-all duration-200 group-hover:shadow-md`}>
                            <h6 className="text-xs font-bold">
                                {type === 'income' ? '+' : '-'}${amount}
                            </h6>
                            {type === 'income' ? <LuTrendingUp /> : <LuTrendingDown />}
                        </div>
                        {/* Show delete button for both income and expense types unless hideDeleteBtn is true */}
                        {!hideDeleteBtn && (
                            <button
                                className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer ml-2 p-1 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
                                onClick={onDelete}
                                aria-label="Delete"
                            >
                                <LuTrash2 size={18} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
}
