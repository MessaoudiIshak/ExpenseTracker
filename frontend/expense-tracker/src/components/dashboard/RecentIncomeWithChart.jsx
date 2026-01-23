import React, { useState, useEffect } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';
const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#9C27B0", "#4F396F"];
export default function RecentIncomeWithChart({ data, totalIncome }) {
    const [chartData, setChartData] = useState([]);
    const prepareChartData = () => {
        const dataArr = data.map((item) => ({
            name: item?.source,
            amount: item?.amount,
        }));
        setChartData(dataArr);
    };

    useEffect(() => {
       prepareChartData();
        return () => {};
    }, [data]);

  return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Last 60 Days Income</h5>
            </div>
            <div className='mt-15'>
            <CustomPieChart
                data={chartData}
                label="Total Income"
                totalAmount={`$${totalIncome}`}
                showTextAnchor
                colors={COLORS}
            />
            </div>
        </div>
    )
}
