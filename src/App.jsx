import { useState } from "react";
import "./App.css";
// import Navbar from "./Navbar";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import ShopCatagory from "./pages/ShopeCategory";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./components/navbar/Navbar1";
import Footer from "./components/footer/Footer";
import banner_man from "./assets/banner_man.png";
import banner_women from "./assets/banner_man.png";
import banner_kids from "./assets/banner_women.jpg";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCatagory category="men" banner={banner_man} />} />
        <Route path="/womens" element={<ShopCatagory category="women" banner={banner_women} />} />
        <Route path="/kids" element={<ShopCatagory category="kid" banner={banner_kids} />} />

        <Route path="/product" element={<Products/>} />
        <Route path="/product/:productId" element={<Products/>} />
         
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
       
      </Routes>
       <Footer/>
    </>
  );
}

export default App;
