import React from 'react'
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
const BuyerChart = () => {

const data = [
  {name: "male", value:580},
  {name: "Female", value:620},
  {name: "Others", value:210},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );


};
return (
  <div className='h-[22rem] bg-white p-4 rounded-sm border-gray-200 flex flex-1'>
    
    <div className="col-md-8 bg-blue-100 ">
         <div className='text-gray-700 font-medium inline-block'><strong>Buyer demography</strong></div>
                        <ResponsiveContainer width={250} height={300} className="text-center">
                            <PieChart width={200} height={200}>
                                <Legend layout="horizontal" verticalAlign="top" align="top" />
                                <Pie className='flex'
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

  </div>
  )}
export default BuyerChart


