import React from 'react'

import { FaBriefcase } from 'react-icons/fa'
export default function DashboardGrid() {
  return (
    <div>
        <div className='flex gap-2 w-full shadow-md rounded-lg overflow-hidden'>
                <BoxWrapper>
                  <div className='rounded-full flex bg-sky-500 h-12 w-12 items-center justify-center'>
                    <FaBriefcase className='text-2lg text-white'/>
                  </div>
                  <div className='pl-4 border-sm border-rounded shadow-lg shadow-inner'>
                    <span className='text-sm text-gray-500 font-light'> Total sales</span>
                    <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                      <span className='text-sm text-green-500 pl-2'>+34%</span>
        
                    </div>
        
                  </div>
                </BoxWrapper>
                <BoxWrapper className='border-sm border-rounded shadow-lg rounded-lg shadow-inner'>
                  <div className='rounded-full border-rounded shadow-lg shadow-inner rounded-full flex bg-red-500 h-12 w-12 items-center justify-center'>
                    <FaBriefcase className='text-2lg text-white'/>
                  </div>
                  <div className='pl-4 border-sm border-rounded shadow-lg shadow-inner'>
                    <span className='text-sm text-gray-500 font-light'> Total Expenses</span>
                    <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                      <span className='text-sm text-green-500 pl-2'>+34%</span>
        
                    </div>
        
                  </div>
                </BoxWrapper>
                <BoxWrapper className='border-sm border-rounded shadow-lg shadow-inner'>
                  <div className='rounded-full border-rounded shadow-lg shadow-inner rounded-full flex bg-yellow-500 h-12 w-12 items-center justify-center'>
                    <FaBriefcase className='text-2lg text-white'/>
                  </div>
                  <div className='pl-4 border-sm border-rounded shadow-lg shadow-inner'>
                    <span className='text-sm text-gray-500 font-light'> Total Customers</span>
                    <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                      <span className='text-sm text-green-500 pl-2'>+34%</span>
        
                    </div>
        
                  </div>
                </BoxWrapper>
                <BoxWrapper className='border-sm border-rounded shadow-lg shadow-inner'>
                  <div className='border-sm border-rounded shadow-lg shadow-inner rounded-full flex bg-green-500 h-12 w-12 items-center justify-center'>
                    <FaBriefcase className='text-2lg text-white'/>
                  </div>
                  <div className='pl-4 border-sm border-rounded shadow-lg shadow-inner'>
                    <span className='text-sm text-gray-500 font-light'> Total Orders</span>
                    <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                      <span className='text-sm text-green-500 pl-2'>+34%</span>
                    </div>
                  </div>
                </BoxWrapper>
                </div>
    </div>
  )
}

function BoxWrapper ({children}) {
  return <div className='bg-blue-100 rounded-sm border border-gray-200 p-4 flex-1 flex'>{children}</div>
}