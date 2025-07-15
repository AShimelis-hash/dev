import React from 'react'
import DashboardGrid from "../DashboardGrid/DashboardGrid"
import TransactionChart  from '../DashboardGrid/TransactionChart'
import BuyerChart from '../DashboardGrid/BuyerChart.js'
import SaveLoanService from '../DashboardGrid/SaveLoanService.js'
import MembersProfile from '../DashboardGrid/MembersProfile.js'

function Dashboard() {
  return (
    <div className='w-full h-screen bg-gradient-to-r  shadow-2lg from-gray-600 to-white-100  border-round border-2 border-gray-500'>
      <header className='w-full object-contain'>
        <p className='text-center text-white bg-orange-400'> Dashboard</p>

      </header>
        
         <div className=' w-full pt-2'>
          <div className=' flex flex-1 border-rounded'>
            <DashboardGrid />
          </div>
          <div className=' flex flex-1 border-rounded pt-2'>
            <SaveLoanService/>
           </div>
           <div className=' flex gap-2 border-rounded pt-2'>
             <div>
            <BuyerChart/>
          </div>
          <div>
            <MembersProfile/>
           </div>
           <div className='bg-blue-100 w-full'>
            <TransactionChart/>
          </div>
           </div>
         </div>
        </div>   
  )
}

export default Dashboard
 
