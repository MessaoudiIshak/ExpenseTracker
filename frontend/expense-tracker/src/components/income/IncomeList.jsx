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
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0'>
                <h5 className='text-sm sm:text-lg font-semibold'>Income Sources</h5>
                <button className='card-btn text-xs sm:text-sm w-full sm:w-fit flex-shrink-0' onClick={onDownload}>
                    <LuDownload className='text-sm sm:text-base flex-shrink-0' /> Download
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 mt-4'>
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
