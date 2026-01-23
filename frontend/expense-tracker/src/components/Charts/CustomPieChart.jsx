import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CustomToolTip from './CustomToolTip.jsx';
import CustomLegend from './CustomLegend.jsx';
export default function CustomPieChart({ data, colors, totalAmount, label, showTextAnchor }) {
  return (
    <ResponsiveContainer width="100%" height={300} >
    <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
        <Tooltip content={<CustomToolTip />} />
        <Legend  content={<CustomLegend />} />
                {showTextAnchor && (
                    <>
                        <text
                            x="50%"
                            y="50%"
                            dy={-25}
                            textAnchor="middle"
                            fontSize="14px"
                            fill='#666'
                        >
                            {label}
                        </text>
                        <text
                            x="50%"
                            y="50%"
                            dy={8}
                            textAnchor="middle"
                            fontSize="24px"
                            fontWeight="semi-bold"
                            fill='#333'
                        >
                            {totalAmount}
                        </text>
                    </>
                )}
    </PieChart>
    </ResponsiveContainer>
  )
}
