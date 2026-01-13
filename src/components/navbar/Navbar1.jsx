// import "./App.css";
import "../navbar/nav.css"
import { Link } from "react-router";
import cartLogo from '../../assets/cartLogo.png'
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

export default function Navbar() {

  const [menu,setMenu]=useState("home");
  const {getTotalCartItems}= useContext(ShopContext);
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img
            className="nav-img"
            src="https://static.vecteezy.com/system/resources/previews/006/547/178/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
            alt="image"
          />
          <h1 className="title">MegaKart</h1>
        </div>

        <div >
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link className="link" to="/">Home</Link> {menu==="home"? <hr/>:<></>}</li>
            <li  onClick={()=>{setMenu("mens")}}><Link  className="link" to="mens">Men's</Link> {menu==="mens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  className="link" to="womens">Women's </Link>{menu==="womens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  className="link" to="kids">Kid's</Link>{menu==="kids"? <hr/>:<></>}</li>
          </ul>
        </div>
       
        <div className="nav-btn-cart">
          <button className="login-btn"><Link  className="link" to="login">Login</Link> </button>

         <Link  className="link" to="cart"><img className="cart" src={cartLogo} alt="" /> </Link> 

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

      </div>
    </>
  );
}
