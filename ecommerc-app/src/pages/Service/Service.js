import React from 'react'
import Pimage1 from '../../Assets/istockphoto-2.jpg'
import Pimage3 from '../../Assets/istockphoto8.jpg'
import Pimage4 from '../../Assets/istockphoto9.jpg'
import Pimage5 from '../../Assets/istockphoto11.jpg'
import Pimage6 from '../../Assets/istockphoto13.jpg'
import Pimage7 from '../../Assets/istockphoto18.jpg'
import Pimage9 from '../../Assets/premium_photo5.avif' 
import Pimage10 from '../../Assets/istockphoto24.jpg'
import Pimage11 from '../../Assets/EnConsultb.jpg'


function Service() {
  return (
    <div >
      <strong className='text-2xL text-center '>Our Services</strong>
      <div className=' flex items-center pt-0 justify-center'>
        <div>
          <div className='flex flex-wrap justify-center gap-4 p-4'>
            <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage1} alt="Product 1" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Business Consulting</h3>
                <p className='text-gray-600'>Description of Product 1</p>
              </div>
            </div>
            <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage3} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Hotel and Tour</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage4} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Delivery Services</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage5} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Guest House</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage6} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Home Based Medical Care</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage7} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Transport and Car Rental Service</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage9} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Financial and Auditing</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
              
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage10} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>General Maintenance</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
             <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
              <img src={Pimage11} alt="Product 2" className='w-full h-40 object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>Environmental Consulting</h3>
                <p className='text-gray-600'>Description of Product 2</p>
              </div>
            </div>
          </div>
    </div>
        
        
      </div>
    </div>
    
  )
}

export default Service