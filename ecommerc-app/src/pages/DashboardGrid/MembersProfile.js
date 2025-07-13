import React from 'react'
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
const MembersProfile = () => {

const data = [
  {name: "Students", value:580},
  {name: "Farmers", value:620},
  {name: "Business man", value:210},
   {name: "Professionals", value:340},
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
  <div className='h-[22rem] bg-white p-4 rounded-sm border-gray-200 flex'>
    <div className='text-gray-700 font-medium'><strong>Buyer demography</strong></div>
    <div className="col-md-8">
                        <ResponsiveContainer width={350} height={200} className="text-center">
                            <PieChart width={100} height={100}>
                                <Legend layout="vertical" verticalAlign="top" align="top" />
                                <Pie
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
export default MembersProfile


