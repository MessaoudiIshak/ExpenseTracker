import React, { useState, useEffect } from 'react';
import { prepareChartData } from '../../utils/helper.js';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../Charts/CustomLineChart.jsx';

export default function ExpenseOverview({ transactions, onExpenseIncome }) {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        setChartData(prepareChartData(transactions));
    }, [transactions]);
    return (
        <div className='card'>
            <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-start sm:justify-between'>
                <div className='flex-1 min-w-0 pr-2'>
                    <h5 className='text-sm sm:text-lg font-semibold truncate'>Expense Overview</h5>
                    <p className='text-xs text-gray-400 mt-0.5 line-clamp-2'>Track your spending trends over time and gain insights into your spending habits.</p>
                </div>
                <button className='add-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0' onClick={onExpenseIncome}>
                    <LuPlus className='text-base sm:text-lg flex-shrink-0' /> Add Expense
                </button>
            </div>
            <div className='mt-4 sm:mt-6 w-full overflow-x-auto'>
                <CustomLineChart data={chartData} type="expense" />
            </div>
        </div>
    );
}
