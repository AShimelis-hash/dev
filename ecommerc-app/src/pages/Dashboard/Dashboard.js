import React from 'react'
import DashboardGrid from "../DashboardGrid/DashboardGrid"
import TransactionChart  from '../DashboardGrid/TransactionChart'
import BuyerChart from '../DashboardGrid/BuyerChart.js'
import SaveLoanService from '../DashboardGrid/SaveLoanService.js'
import MembersProfile from '../DashboardGrid/MembersProfile.js'

function Dashboard() {
  return (
    <div className='w-full relative h-screen bg-gradient-to-r from-yellow-100 to-sky-600  border-round border-2 border-gray-500'>
      <header className='w-full object-contain'>
        <p className='text-center text-white bg-orange-400'> Dashboard</p>

      </header>
        <div className=' flex flex-col '>
        <div >
         <DashboardGrid />
         <div className='flex px-4 gap-4 justify-center items-center'>
          <TransactionChart/>
          <BuyerChart/>
         </div>
         <div>
          <div className='flex px-4 gap-4 justify-center items-center'>
          <SaveLoanService/>
          <MembersProfile/>
         </div>
         </div>
         
        </div>
        </div>
      </div>
    
  )
}

export default Dashboard
 
