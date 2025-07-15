import React from 'react'
import Pimage1 from '../../Assets/istockphoto6.jpg'
import Pimage3 from '../../Assets/istockphoto15.jpg'
import Pimage4 from '../../Assets/istockphoto14.jpg'
import Pimage5 from '../../Assets/istockphoto17.jpg'
import Pimage6 from '../../Assets/istockphoto23.jpg'


function Products() {
  return (
    <div >
      <strong className='text-2xL text-center '>Our Products</strong>
      <div className=' flex items-center pt-0 justify-center'>
        <div>
          <div className='flex flex-wrap justify-center gap-4 p-4'>
            <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage1} alt="Product 1" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Fruits</h3>
                <p className='text-gray-600'>Description of Product 1</p>
              </div>
            </div>
            <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage3} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Cereals</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage4} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Cereals</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage5} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Cereals</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage6} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Cereals</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
          </div>
    </div>
        
        
      </div>
    </div>
    
  )
}

export default Products