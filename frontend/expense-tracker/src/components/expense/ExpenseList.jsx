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
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>All Expenses</h5>
                <button className='card-btn' onClick={onDownload}>
                    <LuDownload className='text-base' /> Download
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
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
