import React from 'react'
import  { ResponsiveContainer, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar} from 'recharts'


const data = [
    {
      name: "Sep",
      Income: "1234",
      Expense: "980"

    },
     {
      name: "Oct",
      Income: "2340",
      Expense: "1654"

    },
     {
      name: "Nov",
      Income: "2314",
      Expense: "1980"

    },
     {
      name: "Dec",
      Income: "1434",
      Expense: "2390"

    },
     {
      name: "Jan",
      Income: "2234",
      Expense: "2190"

    },
     {
      name: "Feb",
      Income: "3234",
      Expense: "2980"

    },
     {
      name: "March",
      Income: "3234",
      Expense: "2980"

    },
     {
      name: "Apr",
      Income: "3234",
      Expense: "2980"

    },
     {
      name: "May",
      Income: "2432",
      Expense: "2280"

    },
     {
      name: "June",
      Income: "3234",
      Expense: "2980"

    },
     {
      name: "July",
      Income: "2200",
      Expense: "1580"

    },
     {
      name: "Aug",
      Income: "2223",
      Expense: "1980"

    }
];

function TransactionChart() {
  return (
    <div className='h-[19rem] bg-white p-4 rounded-sm border-gray-200 flex flex-1'>
      <strong className='text-gray-700 font-medium'>Transaction</strong>
    <div className='w-full'>
      <ResponsiveContainer width='60%' height='60%'>
      <BarChart width={100} height={150} data={data} margin={{
        top:20,
        right:10,
        left: -10,
        bottom: 0
      }}>
        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="Income" fill="#00C49F"/>
        <Bar dataKey="Expense" fill="#FF8042"/>

      </BarChart>

    </ResponsiveContainer>

    </div>
    </div>
  )
}
export default TransactionChart
