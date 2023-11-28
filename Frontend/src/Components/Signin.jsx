import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signin() {

  const navigate = useNavigate()
    const initialValue = {
        email: '',
        password: '',
      }
     
      const [user, setUser] = useState(initialValue);
      const { email, password } = user;
    
      const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = (e) => {
      
        axios
          .post('http://localhost:8000/login', user)
          .then((response) => {
            console.log(response.data);
            if (response.data.error) {
              // console.log("glt h raha ");

            console.log(response.data.error);
            } else {
              // console.log("sii h beta")
              console.log(response.data.message);
              const token = response.data.data;
              localStorage.setItem('token', token);
              navigate('/about');
              
            }
          })
          .catch((error) => {
            console.log('error ' + error);
          })
          
      }
    
  return (
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
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" value = {email} onChange={(e)=> onValueChange(e)} id="email" className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" value={password} onChange={(e)=>{onValueChange(e)}} id="password" placeholder="••••••••" className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className=" text-gray-100">Remember me</label>
                          </div>
                      </div>
                      {/* <a href="#" className="text-sm font-medium text-white hover:underline text-primary-500">Forgot password?</a> */}
                  </div>
                  <button
            onClick={(e) => handleSubmit(e)}
            className="w-full px-4 py-2 text-white font-medium bg-[#e36414] hover:bg-[#fb8b24] active:bg-[#e36414] rounded-lg duration-150"
          >Sign in</button>
                  <p className="text-sm font-light  text-gray-400">
                      Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline text-[#e36414]">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
