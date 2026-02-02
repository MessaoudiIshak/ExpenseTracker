import React, { useState, useEffect } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Legend, Cell } from 'recharts';

export default function CustomBarChart({ data }) {
    const [chartHeight, setChartHeight] = useState(300);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setChartHeight(200);
            } else if (window.innerWidth < 768) {
                setChartHeight(250);
            } else if (window.innerWidth < 1024) {
                setChartHeight(280);
            } else {
                setChartHeight(300);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getColBar = (index) => {
        return index % 2 === 0 ? '#875CF5' : '#cfbefb';
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    <p className='text-xs font-semibold text-purple-800 mb-1'>{payload[0].payload.category}</p>
                    <p className='text-sm text-gray-600'>Amount : <span className='text-sm font-medium text-gray-900'>${payload[0].payload.amount}</span></p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='w-full h-full'>
            <ResponsiveContainer width="100%" height={chartHeight} minHeight={150}>
                <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="none" />
                    <XAxis dataKey="category" tick={{ fontSize: 11, fill:"#555" }} stroke="none" />
                    <YAxis tick={{ fontSize: 11, fill:"#555" }} stroke="none" />
                    <Tooltip content={CustomTooltip} />
                    <Bar
                        dataKey="amount"
                        fill='#ff8042'
                        radius={[10,10,0,0]}
                        activeDot={{r:8, fill: "yellow"}}
                        activeStyle={{fill : "green"}}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getColBar(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
