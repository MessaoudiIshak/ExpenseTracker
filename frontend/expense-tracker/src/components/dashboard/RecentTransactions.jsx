import React from 'react'
import { LuArrowRight } from "react-icons/lu";
import moment from 'moment';
import TransactionInfoCard from '../cards/TransactionInfoCard.jsx';
export default function RecentTransactions( { transactions, onSeeMore }) {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
          <h5 className='text-sm sm:text-lg font-semibold'>Recent Transactions</h5>
        </div>
        <div className='space-y-2 sm:space-y-3 mt-3 sm:mt-4'>
            {transactions?.slice(0, 5)?.map((item, index) => (
                <TransactionInfoCard 
                key={item.id || index}
                title = {item.type === 'expense'? item.category : item.source}
                icon = {item.icon}
                date={moment(item.date).format("DD MMM, YYYY")}
                amount={item.amount}
                type={item.type}
                hideDeleteBtn
              />
            ))}  
        </div>

    </div>
  )
}
