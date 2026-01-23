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
        <div className='card bg-white text-gray-900 p-6 rounded-lg shadow-md'>
            <div className='flex items-start justify-between'>
                <div className='flex flex-col'>
                    <h5 className='text-lg font-bold'>Income Overview</h5>
                    <p className='text-xs text-gray-500 mt-1'>
                        Visualize your income trends over time.
                    </p>
                </div>
                <button className='add-btn bg-white text-purple-500 hover:bg-gray-100 p-2 rounded-full shadow-md' onClick={onAddIncome}>
                    <LuPlus className='text-lg' /> Add Income
                </button>
            </div>
            <div className='mt-10' style={{ width: '100%', height: 300 }}>
                <CustomLineChart data={chartData} type="income" />
            </div>
        </div>
    );
}
