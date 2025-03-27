import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';


export default function Home({onLogout}) {

  return (
    <>
    <Navbar onClick={onLogout}/>
     <section className="main">
     
     <Outlet/>
     </section>
    </>
  )
}