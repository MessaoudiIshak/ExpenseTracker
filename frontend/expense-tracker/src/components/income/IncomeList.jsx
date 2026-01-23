import React, { useMemo } from 'react';
import { LuDownload } from 'react-icons/lu';
import TransactionInfoCard from '../cards/TransactionInfoCard';
import moment from 'moment';

const MemoTransactionInfoCard = React.memo(TransactionInfoCard);

export default function IncomeList({ transactions, onDelete, onDownload }) {
    const formattedTransactions = useMemo(() =>
        transactions?.map((income) => ({
            ...income,
            formattedDate: moment(income.date).format('Do MMM, YYYY'),
        })), [transactions]);
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Income Sources</h5>
                <button className='card-btn' onClick={onDownload}>
                    <LuDownload className='text-base' /> Download
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {formattedTransactions?.map((income) => (
                    <MemoTransactionInfoCard
                        key={income._id}
                        title={income.source}
                        icon={income.icon}
                        date={income.formattedDate}
                        amount={income.amount}
                        type="income"
                        onDelete={() => onDelete(income._id)}
                    />
                ))}
            </div>
        </div>
    );
}
