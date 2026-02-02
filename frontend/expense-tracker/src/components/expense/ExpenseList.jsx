import React, { useMemo } from 'react';
import { LuDownload } from 'react-icons/lu';
import TransactionInfoCard from '../cards/TransactionInfoCard.jsx';
import moment from 'moment';

const MemoTransactionInfoCard = React.memo(TransactionInfoCard);

export default function ExpenseList({ transactions, onDelete, onDownload }) {
    const formattedTransactions = useMemo(() =>
        transactions?.map((expense) => ({
            ...expense,
            formattedDate: moment(expense.date).format('DD MMM, YYYY'),
        })), [transactions]);
    return (
        <div className='card'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0'>
                <h5 className='text-sm sm:text-lg font-semibold'>All Expenses</h5>
                <button className='card-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0' onClick={onDownload}>
                    <LuDownload className='text-sm sm:text-base flex-shrink-0' /> Download
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 mt-4'>
                {formattedTransactions?.map((expense) => (
                    <MemoTransactionInfoCard
                        key={expense._id}
                        title={expense.category}
                        icon={expense.icon}
                        date={expense.formattedDate}
                        amount={expense.amount}
                        type='expense'
                        onDelete={() => onDelete(expense._id)}
                    />
                ))}
            </div>
        </div>
    );
}
