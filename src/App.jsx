//  import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import ProductsBanner from "./components/ProductsBanner";
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Banner" element={<ProductsBanner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
