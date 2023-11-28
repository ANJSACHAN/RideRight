import React from 'react'
import { Link } from "react-router-dom";
import { FaCarRear } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div 
   >
     

<nav className=" bg-gray-900 mb-2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
 >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <FaCarRear className='text-white text-3xl' />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">RideRight</span>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-[#e36414] mr-3 hover:bg-[#fb8b24] focus:ring-2 focus:outline-none focus:ring-[#e36414] font-medium rounded-lg text-sm px-4 py-2 text-center "><Link to="/signin">Signin</Link></button>
      <button type="button" className="text-white bg-[#e36414] mr-3 hover:bg-[#fb8b24] focus:ring-2 focus:outline-none focus:ring-[#e36414] font-medium rounded-lg text-sm px-4 py-2 text-center "><Link to="/signup">Signup</Link></button> 
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between bg-black hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 px-3 focus:text-[#f48c06] text-white bg-blue-700 rounded md:bg-transparent  md:p-0 " aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent focus:text-[#f48c06] md:p-0  text-white ">About</Link>
      </li>
      <li>
        <Link to="/service" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent focus:text-[#f48c06] md:p-0  text-white ">Services</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent focus:text-[#f48c06] md:p-0  text-white ">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}
