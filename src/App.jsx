import { useState } from "react";
import HomeNavbar from "./Components/HomeNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      {/* <HomeNavbar /> */}
    </>
  );
}

export default App;
