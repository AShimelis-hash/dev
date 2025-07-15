import React from 'react'
import image from "../../Assets/istockphoto2.webp"
import image2 from "../../Assets/istockphoto3.webp"
import image3 from "../../Assets/istockphoto1.webp"
import image4 from "../../Assets/istockphoto4.webp"
import image5 from "../../Assets/OIP (1).webp"
import image6 from "../../Assets/OIP.webp"
import image7 from "../../Assets/istockphoto5.jpg"
import image8 from '../../Assets/istockphoto7.jpg'

function Home() {
  return (
    <div className='w-screen overflow-auto'>
    
    <div className='flex flex-wrap justify-center gap-4 p-4 '>
      <div className='w-64 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
        <img className='block mx-auto rounded-sm sm:mx-0 sm:flex-shrink-0' src={image8} alt='welcome to Sew-trillion'/> 
       <div>
        <h3 className='bg-slate-400 relative text-yellow-300'> Welcome to Sew-trillion</h3>
       </div>
      </div>
      
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        <div className='w-100 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
        <img className='block mx-auto rounded-sm sm:mx-0 sm:flex-shrink-0' src={image} alt='welcome to Sew-trillion'/> 
      </div>
      <div>
        <h3 className='bg-slate-400 relative text-white'> We Build and Grow Together</h3>
      </div>
      </div>
    </div>
    <div className='flex flex-wrap justify-center gap-4 p-4 '>
      <div className='w-100 h-64 bg-white shadow-md rounded-lg overflow-hidden'> 
        <img className='block mx-auto rounded-sm sm:mx-0 sm:flex-shrink-0' src={image7} alt='welcome to Sew-trillion'/> 
    </div>
     <div className='w-100 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
      <h1 className='bg-slate-400 text-white'> Invest in your future</h1>
     </div>
        <div className='w-100 h-64 bg-white shadow-md rounded-lg overflow-hidden'>
          <h3 className='bg-slate-400 text-white'> Save your money</h3>
        </div>
        
    </div>
    
        
      
      <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 '>
        <img className='block mx-auto rounded-sm sm:mx-0 sm:flex-shrink-0' src={image2} alt='welcome to Sew-trillion'/>
      </div>
    
      <div>
      <h> Top Rated products</h>
      <ul className='flex'>
        <li className='block bg-cyan-300'>
          <p> Top 1</p>
          <img src={image4} alt=''/>
        </li>
        <li className='block bg-cyan-300'>
           <p> Top 2</p>
          <img src={image5} alt=''/>
        </li>
        <li className='block bg-cyan-300'>
           <p> Top 3</p>
          <img src={image6} alt='' />
        </li>
        <li className='block bg-cyan-300'>
           <p> Top 4</p>
          <img alt='' />
        </li>
        <li className='block bg-cyan-300'>
           <p> Top 5</p>
          <img alt='' />
        </li>
      </ul>
    </div>
    <div>
      <div>
      <h1> Best sell Products</h1>
      <div div className='flex'>
        <div>
          <img src={image3} alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Home