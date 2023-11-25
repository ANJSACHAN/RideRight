import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Warning } from "postcss";
// import { ToastContainer, toast } from 'react-toastify';


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


  
  
  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", userData)
      .then((response) => {
        console.log(response.data);
       
       
      })
      .catch((error) => {
        console.log("error " + error);
        Warning(error);
      });
    navigate("/signin");
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            value={name}
            onChange={(e) => onValueChange(e)}
            placeholder="Full Name"
          />

          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            value={email}
            onChange={(e) => onValueChange(e)}
            placeholder="Email"
          />

          <input
            type="Number"
            className="block border border-grey-light w-full p-3 rounded mb-4 "
            name='phone'
            value={phone}
            onChange={(e) => onValueChange(e)}
            placeholder="Phone No.
            "
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            value={password}
            onChange={(e) => onValueChange(e)}
            placeholder="Password"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Create account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to='../signin'
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
