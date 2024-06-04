import { useState } from "react";
import HomeNavbar from "./Components/HomeNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import BottomNavigationBar from "./Components/BottomNavigationBar";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import BlogDetails from "./Pages/BlogDetails";
import Shop from "./Pages/Shop";
function App() {
  return (
    <>
      <BottomNavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myAccount" element={<MyAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      {/* <HomeNavbar /> */}
    </>
  );
}

export default App;
