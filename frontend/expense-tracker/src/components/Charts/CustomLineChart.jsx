import React, { useState, useEffect } from 'react'
import {XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid} from 'recharts';

export default function CustomLineChart({ data, type = 'income' }) {
    const [chartHeight, setChartHeight] = useState(300);
    const [fontSize, setFontSize] = useState(12);
    const [strokeWidth, setStrokeWidth] = useState(3);
    const [dotRadius, setDotRadius] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setChartHeight(200);
                setFontSize(9);
                setStrokeWidth(2);
                setDotRadius(2);
            } else if (window.innerWidth < 768) {
                setChartHeight(240);
                setFontSize(10);
                setStrokeWidth(2.5);
                setDotRadius(2.5);
            } else if (window.innerWidth < 1024) {
                setChartHeight(270);
                setFontSize(11);
                setStrokeWidth(2.5);
                setDotRadius(2.5);
            } else {
                setChartHeight(300);
                setFontSize(12);
                setStrokeWidth(3);
                setDotRadius(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    {type === 'income' && (
                        <p className='text-xs font-semibold text-purple-800 mb-1'>
                            Source: {payload[0].payload.source || payload[0].payload.name || payload[0].payload.category || ''}
                        </p>
                    )}
                    {type !== 'income' && (
                        <p className='text-xs font-semibold text-purple-800 mb-1'>
                            Category: {payload[0].payload.category || payload[0].payload.name || payload[0].payload.source || ''}
                        </p>
                    )}
                    <p className='text-sm text-gray-600'>Amount : <span className='text-sm font-medium text-gray-900'>{payload[0].payload.amount}</span></p>
                </div>
            );
        }
        return null;
    }
    
    return (
        <div className='bg-white w-full h-full'>
            <ResponsiveContainer width="100%" height={chartHeight} minHeight={150}>
                <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
                            {type === 'income' ? (
                                <>
                                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.9}/>
                                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.3}/>
                                </>
                            ) : (
                                <>
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.9}/>
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.3}/>
                                </>
                            )}
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="none" />
                    <XAxis dataKey="month" tick={{ fontSize: fontSize, fill :"#555" }} stroke="none" />
                    <YAxis tick={{ fontSize: fontSize, fill :"#555" }} stroke="none" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke={type === 'income' ? "#22c55e" : "#ef4444"}
                        fill="url(#mainGradient)"
                        strokeWidth={strokeWidth}
                        dot={{ r: dotRadius, fill: type === 'income' ? "#22c55e" : "#ef4444" }}
                        isAnimationActive={true}
                        animationDuration={700}
                        animationEasing="ease-in-out"
                        connectNulls={true}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
