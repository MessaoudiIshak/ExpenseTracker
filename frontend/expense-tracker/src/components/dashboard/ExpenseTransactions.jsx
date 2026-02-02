import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../cards/TransactionInfoCard'
import moment from 'moment'
export default function ExpenseTransactions({ transactions, onSeeMore }) {
  return (
    <div className='card'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0'>
            <h5 className='text-sm sm:text-lg font-semibold'>Expenses</h5>
            <button className='card-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0'
            onClick={onSeeMore}>
                See All <LuArrowRight className='text-sm sm:text-base flex-shrink-0'/>
            </button>
        </div>
        <div className='space-y-2 sm:space-y-3 mt-3 sm:mt-4'>
            {transactions?.slice(0, 5)?.map((expense) => (
                <TransactionInfoCard
                key={expense._id}
                title={expense.category}
                icon={expense.icon}
                date = {moment(expense.date).format("DD MMM, YYYY")}
                amount = {expense.amount}
                type = "expense"
                hideDeleteBtn
                />
            ))
                }
        </div>

        </div>
  )
}
