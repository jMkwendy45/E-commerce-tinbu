import React from 'react';
import '../../styles/navbar.css';
import cartIcon from '../../assets/carticon.svg';
import personIcon from '../../assets/person.svg';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className='nav-inner'>
      <p className='navbar-logo'>Health<span>Xcale</span></p>
      <p className='navbar-text'>Nigeria's No.1 Pharmaceutical e-commerce platform</p>
      
      <div className="nav-icons">
        <div className='icon-button'>
        <img src={personIcon} alt="Profile" className="icon"/>
        <img src={cartIcon} alt="Cart" className="icon cart-button"/>
        </div>
        <Link to="/allproduct">
      <button className="shop-button">Shop Meds</button>
    </Link>
      </div>    
      </div>
    </nav>
  );
}









// <div className="nav-inner">
// <div className="navbar-logo">Health<span>Xcale</span></div>
// <div className="navbar-text">Nigeria's No.1 Pharmaceutical e-commerce platform</div>
// {/* <div className="navbar-actions"> */}
//   {/* <button className="icon-button">
//     <img src={personIcon} alt="Profile" className="icon-pson"/>
//   </button> */}
//   <img src={personIcon} alt="Profile" className="icon"/>
//   <img src={cartIcon} alt="Cart" className="icon cart-button"/>
//   {/* <span className="cart-count">0</span> */}
//   {/* <button className="icon-button cart-button">
   
//     <span className="cart-count">0</span>
//   </button> */}
// {/* </div> */}
// 

// </div>