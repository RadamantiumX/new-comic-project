import React,{useState} from "react";

import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png';



export default function NavBar() {
    const [navbarScroll, setNavbarScroll] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return(
        <AppBar
        sx={
          navbarScroll
            ? {
                backgroundColor: "#000",
                transition: "0.3s",
                width: "100%",
              }
            : {
                backgroundColor: "#fc4103" ? "transparent" : "#fc4103",
                boxShadow: 0,
                transition: "0.3s",
                width: "100%",
              }
        }
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container d-flex justify-content-start navegacion d-flex justify-content-between">
          <Link to="/home">
           <a className="navbar-brand fw-bold" href="#page-top" title="Home page">
            {/*<h3 style={{ color: "#ffff" }}>Logo</h3>*/}<img src={Logo} alt="epikka-logo-type-frontend" className="logo-img"/>
           </a>
          </Link>
          

          <button
            style={{ color: "#ffff" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className=" navbar-nav ms-auto me-2 my-2 my-lg-0">
            <li className="nav-item">
               
               <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#about">
               <i class="fa-brands fa-twitter"></i>
               </a>
             
           </li>

            <li className="nav-item">
               
               <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#about">
               <i class="fa-brands fa-facebook"></i>
               </a>
             
           </li>
            
            <li className="nav-item">
               
               <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#about">
               <i class="fa-brands fa-instagram"></i>
               </a>
             
           </li>
          
              <li className="nav-item">
               
                  <a style={{fontWeight:"bold"}} class="item-link nav-link me-lg-3" href="#about">
                   <span>S</span>obre mi
                  </a>
                
              </li>
              <li className="nav-item">
                
                <a style={{fontWeight:"bold"}} class="item-link nav-link me-lg-3" href="/portafolio">
                 <span>G</span>aleria
                </a>
                          
              </li>
              <li className="nav-item">
                
                <a style={{fontWeight:"bold"}} class="item-link nav-link me-lg-3" href="/metadata">
                 <span>N</span>oticias
                </a>
                
                
              </li>
              <li className="nav-item">
                <Link to="/blog">
                <a style={{fontWeight:"bold"}} class="item-link nav-link me-lg-3" href="/about">
                 <span>B</span>log
                </a>
                </Link>
                
              </li>
             
            </ul>
          </div>
        </div>
      </AppBar>
    )
}