import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCarRear } from "react-icons/fa6";
import { Warning } from "postcss";
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';


export default function Signup() {
  const initialValue = {
    name: "",
    email: "",
    phone : "",
    password: "",

  };


  const navigate = useNavigate(); 
  const [userData, setUserData] = useState(initialValue);
  const { name, email, phone, password } = userData;


  const notify1 = () => toast.success("Account Created Successfully");
  const notify4 = (msg) => toast.error(msg);
  
  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", userData)
      .then((response) => {
        console.log(response.data);
        console.log(notify1());
        if(response.data.error){notify4(response.data.error)}
        else {
          notify1();
          navigate("/signin");
        }
       
      })
      .catch((error) => {
        console.log("error " + error);
        Warning(error);
      });
   
  };

  return (
//     <div
//         class="p-4 min-h-screen bg-black flex justify-center items-center "
//         style={{
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.istockphoto.com/id/509853160/photo/vehicle-interior.jpg?s=612x612&w=0&k=20&c=93J5Dq_u64n-KKrwIxb6lG668VnoUNkg9H5NFlQYlrU=')`,
//   backgroundSize: "cover",
// }}

//       >
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full   rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-transparent">
//         <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
//           <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">Sign up</h1>
//           <input
//             type="text"
//             className="block text-black  outline-none border border-grey-light w-full p-3 rounded mb-4"
//             name="name"
//             value={name}
//             onChange={(e) => onValueChange(e)}
//             placeholder="Full Name"
//           />

//           <input
//             type="email"
//             className="block text-black  outline-none border border-grey-light w-full p-3 rounded mb-4"
//             name="email"
//             value={email}
//             onChange={(e) => onValueChange(e)}
//             placeholder="Email"
//           />

//           <input
//             type="tel"
//             className="block  text-black outline-none border border-grey-light w-full p-3 rounded mb-4 "
//             name='phone'
//             value={phone}
//             onChange={(e) => onValueChange(e)}
//             placeholder="Phone No.
//             "
//           />

//           <input
//             type="password"
//             className="block  text-black outline-none border border-grey-light w-full p-3 rounded mb-4"
//             name="password"
//             value={password}
//             onChange={(e) => onValueChange(e)}
//             placeholder="Password"
//           />
//           <button
//             onClick={(e) => handleSubmit(e)}
//             className="w-full px-4 py-2 text-white font-medium bg-[#e36414]  hover:bg-[#fb8b24] active:bg-[#e36414]  rounded-lg duration-150"
//           >
//             Create account
//           </button>

//           <div className="text-center text-sm  text-white mt-4">
//             By signing up, you agree to the
//             <a
//               className="no-underline border-b border-grey-dark t text-white"
//               href="#"
//             >
//               Terms of Service
//             </a>{" "}
//             and
//             <a
//               className="no-underline border-b border-grey-dark  text-white"
//               href="#"
//             >
//               Privacy Policy
//             </a>
//           </div>
//         </div>
// </div>




//         <div className=" text-white mt-6">
//           Already have an account?
//           <Link
//             className="no-underline text-[#e36414]  border-b border-blue text-blue"
//             to='../signin'
//           >
//             Log in
//           </Link>
//           .
//         </div>
//       </div>
//     </div>

<section
class="p-4 min-h-screen bg-black flex justify-center items-center "
style={{
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.istockphoto.com/id/509853160/photo/vehicle-interior.jpg?s=612x612&w=0&k=20&c=93J5Dq_u64n-KKrwIxb6lG668VnoUNkg9H5NFlQYlrU=')`,
backgroundSize: "cover",
}}

>
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
>
{/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
  <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
  RideRight  
</a> */}
<div className="w-full   rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-transparent">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
          Sign Up to your account
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
      <div>
              <label for="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
              <input type="text" name="name" value = {name} onChange={(e)=> onValueChange(e)} id="name" className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  placeholder-gray-400 text-black " placeholder="Name" required=""/>
          </div>
          
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" name="email" value = {email} onChange={(e)=> onValueChange(e)} id="email" className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 text-black " placeholder="name@company.com" required=""/>
          </div>
          <div>
              <label for="phone" className="block mb-2 text-sm font-medium text-white">Your Phone no.</label>
              <input type="tel" name="phone" value = {phone} onChange={(e)=> onValueChange(e)} id="phone" className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 text-black " placeholder="Phone no." required=""/>
          </div>
          <div>
              <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" value={password} onChange={(e)=>{onValueChange(e)}} id="password" placeholder="••••••••" className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  placeholder-gray-400 text-black" required=""/>
          </div>
          <div className="flex items-center justify-between">

              {/* <a href="#" className="text-sm font-medium text-white hover:underline text-primary-500">Forgot password?</a> */}
          </div>
          <button
    onClick={(e) => handleSubmit(e)}
    className="w-full px-4 py-2 text-white font-medium bg-[#e36414] hover:bg-[#fb8b24] active:bg-[#e36414] rounded-lg duration-150"
  >Sign Up</button>
          <p className="text-sm font-light  text-gray-400">
              Already have an account ? <Link to="/signin" className="font-medium text-primary-600 hover:underline text-[#e36414]">Sign in</Link>
          </p>
      </form>
  </div>
</div>
</div>
</section>
  );
}
