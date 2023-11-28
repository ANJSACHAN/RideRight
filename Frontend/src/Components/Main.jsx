import React from 'react'
import H2 from './HomePage/H2';
import H1 from './HomePage/H1';
import H4 from './HomePage/H4';
import H5 from './HomePage/H5';
import H6 from './HomePage/H6';
import H8 from './HomePage/H8';


export default function Main() {
  return (
    <div className=''>
<H1></H1>
<div className='h-[100vh] bg-black flex flex-col text-center justify-center'><H6></H6></div>
<H2></H2>
<div className='h-[100vh] bg-black flex flex-col text-center justify-center'><H4></H4></div>
	
  <div className='h-[60vh]'>   <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216681.54168577853!2d77.87411869453125!3d30.193914000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925b2d5911f41%3A0xc980c91102bfbaf2!2sFreedom%20Car%20Rental!5e1!3m2!1sen!2sin!4v1701099864132!5m2!1sen!2sin"
        height="100%" width="100%"></iframe></div>

<div className='h-[100vh] bg-black flex flex-col text-center justify-center'><H5></H5></div>
<H8></H8>
     
     </div>
  )
}
