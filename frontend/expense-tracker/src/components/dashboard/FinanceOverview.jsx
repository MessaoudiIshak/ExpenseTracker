import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart.jsx';
const COLORS =["#875CF5","#FA2C37","#FF6900"]

export default function FinanceOverview({ totalBalance, totalIncome, totalExpense }) {
    const balanceData = [
        {
            name: 'Total Balance',
            amount: totalBalance,
        },
        {
            name: 'Total Income',
            amount: totalIncome,
        },
        {
            name: 'Total Expense',
            amount: totalExpense,
        },
    ];
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-sm sm:text-lg font-semibold truncate'>Financial Overview</h5>
        </div>
        <div className='mt-4 sm:mt-6 w-full overflow-x-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px]'>
        <CustomPieChart data={balanceData} colors={COLORS} 
        totalAmount ={`$${totalBalance}`}
        label ="Total Balance" 
        showTextAnchor/>
        </div>
    </div>
  )
}
