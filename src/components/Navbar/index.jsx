import React from "react";
import NavbarButton from "../NavbarButton";
import './index.css'
import Form from "../Form";

//1. Create a navbar (Easier)
//1. make a Navbar component 
//2. make a NavbarButton component
//3. import NavbarButton into Navbar
//4. Make 4 NavbarButton in Navbar
//5. import Navbar into App.js and make 1 Navbar

const Navbar = () => {
    return (
    <div className='fontSize'>
    <NavbarButton>Navbar Button 1</NavbarButton>
    <NavbarButton>Navbar Button 2</NavbarButton>
    <NavbarButton>Navbar Button 3</NavbarButton>
    <NavbarButton>Navbar Button 4</NavbarButton>
    </div>
    ); 
}; 

export default Navbar; 
