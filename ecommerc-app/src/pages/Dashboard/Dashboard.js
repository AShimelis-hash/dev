import React from 'react'
import DashboardGrid from "../DashboardGrid/DashboardGrid"
import BarChart from '../DashboardGrid/BarChart'
import { FaBriefcase } from 'react-icons/fa'
function Dashboard() {
  return (
    <div className='w-full relative h-screen bg-gradient-to-r from-yellow-100 to-sky-600  border-round border-2 border-gray-500'>
      <header className='w-full object-contain'>
        <p className='text-center text-white bg-orange-400'> Dashboard</p>

      </header>
      
        <div className='flex gap-4 w-full'>
        <BoxWrapper>
          <div className='rounded-full bg-sky-500 h-12 w-12 items-center justify-center'>
            <FaBriefcase className='text-2lg text-white'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'> Total sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
              <span className='text-sm text-green-500 pl-2'>+34%</span>

            </div>

          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full bg-sky-500 h-12 w-12 items-center justify-center'>
            <FaBriefcase className='text-2lg text-white'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'> Total sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
              <span className='text-sm text-green-500 pl-2'>+34%</span>

            </div>

          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full bg-sky-500 h-12 w-12 items-center justify-center'>
            <FaBriefcase className='text-2lg text-white'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'> Total sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
              <span className='text-sm text-green-500 pl-2'>+34%</span>

            </div>

          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className='rounded-full bg-sky-500 h-12 w-12 items-center justify-center'>
            <FaBriefcase className='text-2lg text-white'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'> Total sales</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
              <span className='text-sm text-green-500 pl-2'>+34%</span>

            </div>

          </div>
        </BoxWrapper>
        </div>
        <div className=' flex justify-center items-center space-x-4 py-4 gap-8 w-full h-20 '>
          <div>
        <DashboardGrid />
        </div>
      <div>
        <BarChart />
      </div>
        </div>
      </div>
    
  )
}

export default Dashboard
 
function BoxWrapper ({children}) {
  return <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex'>{children}</div>
}