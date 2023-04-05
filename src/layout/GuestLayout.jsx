import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layoutComponents/NavBar";
import Footer from "../layoutComponents/Footer";

export default function GuestLayout() {
    return(
        <>
        <NavBar/>
          <Outlet/>
         <Footer/> 
        </>
    )
}