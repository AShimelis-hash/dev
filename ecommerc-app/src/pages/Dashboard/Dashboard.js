import React from 'react'
//import Transaction from './Transaction.js'
function Dashboard() {
  return (
    <div>
      <header className='w-full object-contain'>
        <p className='text-center text-white bg-orange-400'> This is header</p>

      </header>
      <main className='object-contain top-10 bottom-40 overflow-auto h-80 w-full md:overscroll-contain lg:overscroll-none border-rounded shadow-lg'>
        <div className=' w-full h-fit grid gap-4 grid-cols-2 shadow-inner hover:border-blue justify-between'>
          <div className=' border-2 border-fuchsia-500 grid h=32 w-32 p-4 box-border gap-x-4 gap-y-2 grid-cols-2 '>
            Transaction history
          </div>
          <div className=' border-2 border-fuchsia-500 grid h=32 w-32 p-4 box-border gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Membership data</p>
          </div>
          <div className=' border-2 border-fuchsia-500 h=32 w-32 p-4 box-border grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Total deposit</p>
          </div>
          <div className=' border-2 border-fuchsia-500 h=32 w-32 p-4 box-border grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Saved money</p>
          </div>
          <div className=' border-2 border-fuchsia-500 h=32 w-32 p-4 box-border grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Top Products</p>
          </div>
          <div className=' border-2 border-fuchsia-500 h=32 w-32 p-4 box-border grid gap-x-y gap-y-2 grid-cols-2 shadow-inner'>
            <p>Top Service</p>
          </div>
          <div className=' border-2 border-fuchsia-500 h=32 w-32 p-4 box-border grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Member Data</p>
          </div>
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <div className='bg-black  border-sky-100 border-rounded'>
            <p className='text-white'>
              Revenue
            </p>
            <div>
              <p>Revenue details</p>
            </div>
            </div>
            <div className='bg-black border-sky-100 border-rounded'>
            <p className='text-white'>
              Sales
            </p>
            <div>
              <p>sales detail</p>
            </div>
          </div>
          <div className='bg-black  border-sky-100 border-rounded'>
            <p className='text-white'>
            Purchase
          </p>
          <div>
            <p> Purchase  details</p>
          </div>
          </div>
          
        </div>

      </main>
    </div>
  )
}

export default Dashboard