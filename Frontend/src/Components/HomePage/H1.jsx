import {React,useState} from 'react'
import Typewriter from 'typewriter-effect';

export default function H1() {
 
    const arr=["https://images.unsplash.com/photo-1651657700808-4e2b9687a2a1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://images.unsplash.com/photo-1515678845848-b037361130e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   ];
    const[data,setdata]=useState(0);
    // console.log(arr[data]);
    const settime = setTimeout(() => {

      setdata((data+1)%arr.length);
    }, 1500);

    
  return (

    <>
    <section
      class="p-4 min-h-screen bg-black flex justify-center items-center "
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'https://images.unsplash.com/photo-1651657700808-4e2b9687a2a1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}})`, backgroundSize: "cover" ,  }}
    >
     <div class="text-center lg:w-[67%] p-8 mx-auto">
<div className="text-6xl  text-white tracking-wide font-sans font-bold">
<Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 50,
          // typeString:["Edu"],
          strings: ["Unlock the Ride!"],
        }}
      />
</div>
{/* <p className="mt-6 mb-4 text-base tracking-wide">
  Our car rental experts are here to assist you through the process. Take the first step today.
</p> */}
<div className="flex flex-col text-center justify-center mt-4 sm:flex-row">
  <div className ="text-white font-normal text-2xl m-2 tracking-wide font-sans">Unleash the Freedom to Drive: Premium Cars, Hassle-Free Rentals. Your Journey, Your Way.</div>
  </div>
</div>

    </section>
  </>
  

  )
}
