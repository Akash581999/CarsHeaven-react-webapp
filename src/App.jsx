//  import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import ProductsBanner from "./components/ProductsBanner";
import AddventureBanner from "./components/AddventureBanner";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Contactbanner from "./components/ContactBanner";
import AllProducts from "./Pages/AllProducts";
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/ProductsBanner" element={<ProductsBanner />} />
          <Route path="/AddventureBanner" element={<AddventureBanner />} />
          <Route path="/News" element={<News />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contactbanner" element={<Contactbanner />} />
          <Route path="/AllProducts" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
