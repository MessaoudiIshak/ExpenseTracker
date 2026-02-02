import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment';
import TransactionInfoCard from '../cards/TransactionInfoCard.jsx';
export default function RecentIncome( { transactions, onSeeMore }) {
  return (
    <div className='card'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0'>
            <h5 className='text-sm sm:text-lg font-semibold'>Income</h5>
            <button className='card-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0' onClick={onSeeMore}>
                See All <LuArrowRight className='text-sm sm:text-base flex-shrink-0'/>
            </button>
        </div>
    <div className='mt-3 sm:mt-4 space-y-2 sm:space-y-3'>
        {transactions?.slice(0, 5)?.map((item, index) => (
            <TransactionInfoCard
            key={item.id || index}
            title={item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MMM, YYYY")}
            amount={item.amount}
            type="income"
            hideDeleteBtn
            />
        ))}
    </div>
    </div>
  )
}
