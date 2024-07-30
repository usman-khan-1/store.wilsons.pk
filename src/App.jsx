import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { makePostRequest } from "./Apis";
import { setBranding } from "./Store/BrandingSlice";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
function App() {
  const dispatch = useDispatch();
  const fetchBranding = async () => {
    try {
      const response = await makePostRequest("branding/info");
      dispatch(setBranding(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchBranding();
  }, []);

  // const branding = useSelector((state) => state.branding.value);
  // console.log("bravdv", branding);
  return (
    <>
      <BottomNavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myAccount" element={<MyAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:slug" element={<ProductDetails />} />
          <Route path="product-details" element={<ProductDetails />} />
        
          <Route path="checkout" element={<Checkout />} />
          <Route path="category" element={<Shop />} />
          <Route path="category/:slug" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
