import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Main from "./Components/Main"
import Errorpage from './Components/Errorpage'
import { ToastContainer, toast } from 'react-toastify';
// import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes >        
      <Route path="/about"  element={<About/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/signin"  element={<Signin/>} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/"  element={<Main/>} />
      <Route path= "*" element={<Errorpage/>} />
    </Routes>
    {/* <ToastContainer/> */}
    </>
  )
}
