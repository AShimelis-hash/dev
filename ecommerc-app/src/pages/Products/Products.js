import React from 'react'

import Cards from './Cards.js'

function Products() {
  return (
    <div>
      <div className='relative flex items-center'>
      {Cards.map((item) => (
        <img   className='w-[60px] inline-block p-2 cursor-pointer-105 ease-in-out duration-300' src={item.Image} alt='/'/>
      ))}
      </div>
    </div>
    
  )
}

export default Products