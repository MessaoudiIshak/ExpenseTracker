import React, { useMemo } from 'react';
import { prepareExpenseBarCharData } from '../../utils/helper.js';
import CustomBarChart from '../Charts/CustomBarChart.jsx';
export default function Last30DaysExpenses({ data }) {
    const chartData = useMemo(() => {
        const result = prepareExpenseBarCharData(data);
        console.log('Data passed to Last30DaysExpenses:', data);
        console.log('Chart data prepared for CustomBarChart in Last30DaysExpenses:', result);
        return result;
    }, [data]);

    return (
        <div className='card col-span-1'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Last 30 Days Expenses</h5>
            </div>
            <div className='mt-15'>
            <CustomBarChart data={chartData} />
            </div>
        </div>
    );
}
