import React from "react";
import { Children } from "react";
import './index.css'


//{/*this is a children prop to render the content inside the button, prop passes from parent to child*/}
const NavbarButton = ({children}) => {

    return (
    <button className="color1">
    {children}
    </button>
    ); 
}; 

export default NavbarButton; 

//note: With this implementation {children}, use the NavbarButton component in the parent component (Navbar), 
//provide any content as children and it will be rendered inside the NavbarButton. 