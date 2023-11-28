import React from "react";
// import bg_2 from "../../assets/bg_2.jpg";
import { FaCarRear } from "react-icons/fa6";

export default function H2() {
  return (
    <>
      <section
        class="p-4 min-h-screen bg-black flex justify-center items-center "
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'https://images.unsplash.com/photo-1515678845848-b037361130e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`, backgroundSize: "cover" ,  }}
      >
       <div class="text-center lg:w-[67%] p-8 mx-auto">
  <div className="text-5xl  text-white m-2 tracking-wide font-sans font-bold">
    Rent a Car in 3 Simple Steps
  </div>
  {/* <p className="mt-6 mb-4 text-base tracking-wide">
    Our car rental experts are here to assist you through the process. Take the first step today.
  </p> */}
  <div className="flex flex-col mt-4 sm:flex-row">
    <div className="m-4 lg:w-[33%]">
      <div className="relative">
        {/* <div className="w-16 h-16 rounded-full bg-blue-400 absolute -top-6 -left-6 overflow-hidden"></div> */}
        <div className="flex m-1 z-20  bg-white rounded-lg flex-col text-left p-4">
          <span className="w-10 m-1 h-10 rounded-full bg-[#ffa200]"></span>
          <h1 className="text-lg m-1 tracking-wide font-bold">
            Car Selection
          </h1>
          <p className="tracking-wide m-1 font-light">
            Browse our fleet and choose the perfect car for your journey.
          </p>
        </div>
      </div>
    </div>
    <div className="m-4 lg:w-[33%]">
      <div className="relative">
        {/* <div className="w-16 h-16 rounded-full bg-blue-400 absolute -top-6 -left-6 overflow-hidden"></div> */}
        <div className="flex z-20 m-1 bg-gray-50 rounded-lg flex-col text-left p-4">
          <span className="w-10 m-1 h-10 rounded-full bg-[#ffa200] "></span>
          <h1 className="text-lg m-1 tracking-wide font-bold">
            Reservation
          </h1>
          <p className="tracking-wide m-1 font-light">
            Reserve your chosen car and schedule your rental period.
          </p>
        </div>
      </div>
    </div>
    <div className="m-4 lg:w-[33%]">
      <div className="relative">
        {/* <div className="w-16 h-16 rounded-full  bg-blue-400 absolute -top-6 -left-6 overflow-hidden"></div> */}
        <div className="flex z-20 m-1 bg-gray-50 rounded-lg flex-col text-left p-4">
          <span className="w-10 m-1 h-10 rounded-full bg-[#ffa200]"></span>
          <h1 className="text-lg m-1 tracking-wide font-bold">
            Pick-Up & Drive
          </h1>
          <p className="m-1 font-light">
            Visit our location, pick up your car, and enjoy the ride.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
}
