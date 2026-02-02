import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CustomToolTip from './CustomToolTip.jsx';
import CustomLegend from './CustomLegend.jsx';

export default function CustomPieChart({ data, colors, totalAmount, label, showTextAnchor }) {
  const [chartHeight, setChartHeight] = useState(320);
  const [pieCy, setPieCy] = useState("50%");
  const [outerRadius, setOuterRadius] = useState(130);
  const [innerRadius, setInnerRadius] = useState(100);
  const [labelFontSize, setLabelFontSize] = useState(14);
  const [amountFontSize, setAmountFontSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setChartHeight(200);
        setPieCy("48%");
        setOuterRadius(60);
        setInnerRadius(45);
        setLabelFontSize(9);
        setAmountFontSize(12);
      } else if (window.innerWidth < 640) {
        setChartHeight(220);
        setPieCy("48%");
        setOuterRadius(70);
        setInnerRadius(52);
        setLabelFontSize(10);
        setAmountFontSize(14);
      } else if (window.innerWidth < 768) {
        setChartHeight(240);
        setPieCy("48%");
        setOuterRadius(90);
        setInnerRadius(68);
        setLabelFontSize(11);
        setAmountFontSize(16);
      } else if (window.innerWidth < 1024) {
        setChartHeight(270);
        setPieCy("48%");
        setOuterRadius(110);
        setInnerRadius(82);
        setLabelFontSize(12);
        setAmountFontSize(18);
      } else {
        setChartHeight(320);
        setPieCy("48%");
        setOuterRadius(130);
        setInnerRadius(100);
        setLabelFontSize(14);
        setAmountFontSize(24);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={chartHeight} minHeight={150}>
    <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy={pieCy}
                    outerRadius={outerRadius}
                    innerRadius={innerRadius}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
        <Tooltip content={<CustomToolTip />} />
        <Legend  content={<CustomLegend />} wrapperStyle={{ paddingTop: '8px', marginBottom: '0px' }} verticalAlign="bottom" height={36} />
                {showTextAnchor && (
                    <>
                        <text
                            x="50%"
                            y="50%"
                            dy={-30}
                            textAnchor="middle"
                            fontSize={labelFontSize}
                            fill='#666'
                        >
                            {label}
                        </text>
                        <text
                            x="50%"
                            y="50%"
                            dy={-8}
                            textAnchor="middle"
                            fontSize={amountFontSize}
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
