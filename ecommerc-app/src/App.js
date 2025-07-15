
import "./index.css"
import React from "react-dom"
import Home from './pages/Home/Home.js'
import Dashboard from './pages/Dashboard/Dashboard.js'
import Loan from './pages/Loan-Service/Loan.js'
import Membership from './pages/Membership/Membership.js'
import Products from './pages/Products/Products.js'
import Saving from './pages/Saving/Saving.js'
import Service from './pages/Service/Service.js'
import Training from './pages/Training/Training.js'
import ContactUs from './pages/AboutUs/AboutUs.js'
import Layout from "./pages/Layout/Layout.js"
import Profile from "./pages/Profile/Profile.js"
import Logout from "./pages/Profile/Logout.js"
import {  Routes, Route} from "react-router-dom"
import {FaPhone} from 'react-icons/fa'
import { FaMailBulk } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

function App() {
  return (
    <div>
    <div>
      <div className="flex shadow-2lg">
        <header className=" w-full bg-gradient-to-r from-gray-400 to-white-500">
          <h1 className=" text-bold text-white">SEW-Trillion</h1>
           <div className=" gap-11 object-right-bottom ">
            <button className="bottom-0 right-12 h-8 w-16 max-w-24 bg-yellow-600 shadow-md  rounded-md">{'Login'}</button>
          
              <button className="bottom-0 right-16 h-8 w-16  max-w-24 bg-yellow-600 shadow-md rounded-md">{'SignUp'}</button>
           </div>
            
      </header>
      </div>
      <div className=" shadow-lg border bg-slate-300">
        <Layout />
      </div>
      <div className=" px-2 py-4 justify-center items-center   flex space-x-8">
        <Routes>
          
          <Route index element={ <Home/>}/>
          <Route path='dashboard' element={ <Dashboard/>}/>
           <Route path='loan' element={ <Loan/>}/>
            <Route path='membership' element={ <Membership/>}/>
             <Route path='products' element={ <Products/>}/>
              <Route path='saving' element={ <Saving/>}/>
               <Route path='services' element={ <Service/>}/>
                <Route path='training' element={ <Training/>}/>
                  <Route path='contact' element={ <ContactUs/>}/>
                  <Route path='profile' element={ <Profile/>}/>
                  <Route path='logout' element={ <Logout/>}/>
        </Routes>
      </div>
      <footer className="fixed bottom-0  w-full h-30">
        <div className=" flex bg-yellow-200  items-center justify-center shadow-lg border-md gap-2">
         <div className=' flex gap-4 border-sm border-rounded shadow-lg px-8 py-5 justify-center items-center'>
          <span> Adders</span>
          <p> <FaPhone/></p> <p> +251922147734</p>
          <p> <FaMailBulk/></p> <p> shimelisget2@gmail.com</p>
          
         </div>
         <div className='flex gap-4 border-sm border-rounded shadow-lg px-8 py-5 justify-center items-center '>
          <span> Social Media</span>
          <h2> <FaFacebook/></h2> <p> 0922147734</p>
          <h2> <FaLinkedin/></h2> <p> ...@gmail.com</p>
          <h2> <FaTwitter/></h2> <p> 0922147734</p>
         </div>
        </div>
      </footer>
      </div>
      </div>
  );
};
export default App