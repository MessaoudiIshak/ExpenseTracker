import React, { useState, useEffect } from 'react';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../Charts/CustomLineChart';
import { prepareChartData } from '../../utils/helper.js';

export default function IncomeOverview({ transactions, onAddIncome }) {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        setChartData(Array.isArray(transactions) ? prepareChartData(transactions) : []);
    }, [transactions]);
    return (
        <div className='card bg-white text-gray-900 p-4 sm:p-6 rounded-lg shadow-md'>
            <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-start sm:justify-between'>
                <div className='flex-1 min-w-0 pr-2'>
                    <h5 className='text-sm sm:text-lg font-bold truncate'>Income Overview</h5>
                    <p className='text-xs text-gray-500 mt-1 line-clamp-2'>
                        Visualize your income trends over time.
                    </p>
                </div>
                <button className='add-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0 bg-white text-purple-500 hover:bg-gray-100 rounded-lg' onClick={onAddIncome}>
                    <LuPlus className='text-base sm:text-lg flex-shrink-0' /> Add Income
                </button>
            </div>
            <div className='mt-4 sm:mt-6 w-full overflow-x-auto'>
                <CustomLineChart data={chartData} type="income" />
            </div>
        </div>
    );
}
