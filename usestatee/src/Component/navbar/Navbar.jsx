import "../navbar/navbar.style.css";
import { useState } from "react";
import Button from "../button/button";


function Navbar() {
  const [isloginndIn,set]=useState(true); //marja lera bet
 const handelClick=()=>{
  set(!isloginndIn)
 };
  // const isloginndIn=false;
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">CARD</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Button text={isloginndIn ? "Logout" :"login"} handelClick={handelClick}/> </li>
      </ul>
    </nav>
  );
}

export default Navbar;
