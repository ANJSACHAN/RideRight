import React from 'react'

export default function Contact() {
  return (
    
   <>
	 <section
        class="p-4 min-h-screen bg-black flex justify-center items-center "
        style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.istockphoto.com/id/1139595108/photo/car-in-rural-road-in-deep-rain-forest-with-green-tree-forest-aerial-view-car-in-the-forest.jpg?s=612x612&w=0&k=20&c=WKlDjoQATJbZiEg_ucKTFRMIMhr5hpQno5xtG5n_xy4=')`,
  backgroundSize: "cover",
}}

      >
      <div class="text-center lg:w-[67%] p-8 mx-auto brightness-100">
  <div className="md:text-5xl text-4xl text-white md:m-2 mt-20 tracking-wide font-sans font-bold brightness-100">
    Contact Us for Car Rental
  </div>
  <section className="py-6 opacity-100 text-gray-50">
    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
      <div className="py-6 md:py-0 md:px-6">
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="pt-2 pb-4">Fill in the form to inquire about car rental services</p>
        <div className="space-y-4">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <span className='font-semibold text-lg text-white'>Fake Street, Car City</span>
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z"></path>
            </svg>
            <span className='font-semibold text-lg text-white'>+123 456 7890</span>
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className='font-semibold text-lg text-white'>info@carrental.com</span>
          </p>
        </div>
      </div>
      <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        <label className="block">
          <span className="mb-1 className='font-semibold text-lg text-white'">Full name</span>
          <input type="text" placeholder="Your Full Name" className="block w-full p-2 rounded-md text-black outline-none box-border opacity-70 shadow-sm focus:ring focus:ri focus:ri " />
        </label>
        <label className="block">
          <span className="mb-1 className='font-semibold text-lg text-white'">Email address</span>
          <input type="email" placeholder="your.email@example.com" className="block w-full p-2 outline-none text-black box-border rounded-md shadow-sm focus:ring focus:ri focus:ri opacity-70 " />
        </label>
        <label className="block">
          <span className="mb-1 className='font-semibold text-lg text-white'">Message</span>
          <textarea rows="3" placeholder="Your message..." className="block w-full p-2 outline-none box-border text-black rounded-md focus:ring focus:ri focus:ri opacity-70"></textarea>
        </label>
        <button type="button" className="self-center px-8 py-3 text-lg rounded  bg-[#e36414]  hover:bg-[#fb8b24] text-white ">Submit</button>
      </form>
    </div>
  </section>
</div>


      </section>
    
   </>
  )
}
