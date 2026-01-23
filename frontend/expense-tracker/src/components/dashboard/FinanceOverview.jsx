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
            <h5 text-lg>Financial Overiview</h5>
        </div>
        <div className='mt-15'>
        <CustomPieChart data={balanceData} colors={COLORS} 
        totalAmount ={`${totalBalance}`}
        label ="Total Balance" 
        showTextAnchor/>
        </div>
    </div>
  )
}
