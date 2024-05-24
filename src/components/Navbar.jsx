import React from 'react'
import Logo from "../assets/images/logo1.png"


const Navbar = () => {

    
  return (
    <div className='navbar_container'>
        <div className="logo">
            <img src={Logo} alt="Logo"/>
            <div className="line"></div>
        </div>
        <ul>
            <li><a href="#" ><span><i className='bx bxs-user' ></i></span> User Managment</a></li>
            <li className='active'><a href="#" ><span><i className='bx bxs-shopping-bag ' ></i></span> Order Managment</a></li>
            <li><a href="#"><span><i className='bx bxs-purchase-tag-alt'></i></span> Product Managment</a></li>
        </ul>
        <div className="burger_menu">
        <i className='bx bx-menu bx-md' ></i>
        </div>
        
    </div>
  )
}

export default Navbar