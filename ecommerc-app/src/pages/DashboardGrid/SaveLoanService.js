import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { FaPeopleCarry } from 'react-icons/fa'
function SaveLoanService() {
  return (
    <div>
            <div className='flex gap-4 w-full'>
                    <BoxWrapper>
                      <div className='rounded-full flex bg-sky-500 h-12 w-12 items-center justify-center'>
                        <FaMoneyBill className='text-2lg text-white'/>
                      </div>
                      <div className='pl-4'>
                        <span className='text-sm text-gray-500 font-light'> Total Saves</span>
                        <div className='flex items-center'>
                          <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                          <span className='text-sm text-green-500 pl-2'>+34%</span>
            
                        </div>
            
                      </div>
                    </BoxWrapper>
                    <BoxWrapper>
                      <div className='rounded-full flex bg-red-500 h-12 w-12 items-center justify-center'>
                        <FaMoneyBillAlt className='text-2lg text-white'/>
                      </div>
                      <div className='pl-4'>
                        <span className='text-sm text-gray-500 font-light'> Total loan</span>
                        <div className='flex items-center'>
                          <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                          <span className='text-sm text-green-500 pl-2'>+34%</span>
            
                        </div>
            
                      </div>
                    </BoxWrapper>
                    <BoxWrapper>
                      <div className='rounded-full flex bg-yellow-500 h-12 w-12 items-center justify-center'>
                        <FaPeopleCarry className='text-2lg text-white'/>
                      </div>
                      <div className='pl-4'>
                        <span className='text-sm text-gray-500 font-light'> Total service</span>
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

export default SaveLoanService
function BoxWrapper ({children}) {
  return <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex'>{children}</div>
}